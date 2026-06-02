/**
 * One-time recovery: dist (Babel output) → src (JSX source).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import parser from "@babel/parser";
import traverseModule from "@babel/traverse";
import generateModule from "@babel/generator";
import * as t from "@babel/types";

const traverse = traverseModule.default;
const generate = generateModule.default;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const distDir = path.join(root, "dist");
const srcDir = path.join(root, "src");

function parse(code) {
  return parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });
}

function unwrapExpression(expr) {
  if (t.isParenthesizedExpression(expr)) return unwrapExpression(expr.expression);
  return expr;
}

function buildJsxChildren(children) {
  const normalized = children
    .filter((c) => !t.isNullLiteral(c))
    .map((c) => {
      const expr = unwrapExpression(c);
      if (t.isStringLiteral(expr)) {
        const text = expr.value.trim();
        if (!text) return null;
        return t.jsxText(expr.value);
      }
      if (t.isJSXElement(expr) || t.isJSXFragment(expr)) return expr;
      return t.jsxExpressionContainer(expr);
    })
    .filter(Boolean);

  if (normalized.length === 0) return null;
  if (normalized.length === 1 && t.isJSXText(normalized[0])) return normalized;
  return normalized;
}

function buildJsxAttrs(propsNode) {
  if (!propsNode || t.isNullLiteral(propsNode)) return [];
  if (!t.isObjectExpression(propsNode)) {
    return [t.jsxSpreadAttribute(propsNode)];
  }
  return propsNode.properties.flatMap((prop) => {
    if (t.isObjectProperty(prop)) {
      const name = t.isIdentifier(prop.key)
        ? prop.key.name
        : t.isStringLiteral(prop.key)
          ? prop.key.value
          : null;
      if (!name) return [];
      if (name === "children") return [];
      const attrName = t.jsxIdentifier(name);
      if (t.isFunctionExpression(prop.value) || t.isArrowFunctionExpression(prop.value)) {
        return [t.jsxAttribute(attrName, t.jsxExpressionContainer(prop.value))];
      }
      return [t.jsxAttribute(attrName, t.jsxExpressionContainer(prop.value))];
    }
    if (t.isSpreadElement(prop)) {
      return [t.jsxSpreadAttribute(prop.argument)];
    }
    return [];
  });
}

function createElementToJsx(path) {
  const { node } = path;
  if (!t.isCallExpression(node)) return;
  const callee = node.callee;
  const isCreateElement =
    (t.isMemberExpression(callee) &&
      t.isIdentifier(callee.object, { name: "React" }) &&
      t.isIdentifier(callee.property, { name: "createElement" })) ||
    (t.isIdentifier(callee, { name: "createElement" }) &&
      path.scope.hasBinding("createElement", { noGlobals: true }));

  if (!isCreateElement) return;

  const [typeArg, propsArg, ...restChildren] = node.arguments;
  const typeExpr = unwrapExpression(typeArg);

  let jsxName;
  if (t.isStringLiteral(typeExpr)) {
    jsxName = t.jsxIdentifier(typeExpr.value);
  } else if (
    t.isMemberExpression(typeExpr) &&
    t.isIdentifier(typeExpr.object, { name: "React" }) &&
    t.isIdentifier(typeExpr.property, { name: "Fragment" })
  ) {
    const children = buildJsxChildren(restChildren);
    path.replaceWith(
      children?.length
        ? t.jsxFragment(t.jsxOpeningFragment(), t.jsxClosingFragment(), children)
        : t.jsxFragment(t.jsxOpeningFragment(), t.jsxClosingFragment(), []),
    );
    return;
  } else if (t.isIdentifier(typeExpr)) {
    jsxName = t.jsxIdentifier(typeExpr.name);
  } else {
    jsxName = t.jsxExpressionContainer(typeExpr);
  }

  const propsChildren =
    propsArg &&
    !t.isNullLiteral(propsArg) &&
    t.isObjectExpression(propsArg)
      ? propsArg.properties
          .filter(
            (p) =>
              t.isObjectProperty(p) &&
              ((t.isIdentifier(p.key) && p.key.name === "children") ||
                (t.isStringLiteral(p.key) && p.key.value === "children")),
          )
          .map((p) => (t.isObjectProperty(p) ? p.value : null))
          .filter(Boolean)
      : [];

  const allChildren = [...propsChildren, ...restChildren];
  const children = buildJsxChildren(allChildren);
  const attrs = buildJsxAttrs(propsArg);

  const opening = t.jsxOpeningElement(jsxName, attrs, !children);
  const closing = t.jsxClosingElement(jsxName);
  const element = t.jsxElement(opening, closing, children || []);

  path.replaceWith(element);
}

function refParamsToDestructuring(path) {
  const node = path.node;
  if (!t.isFunctionDeclaration(node) && !t.isFunctionExpression(node)) return;
  const params = node.params;
  if (params.length !== 1 || !t.isIdentifier(params[0], { name: "_ref" })) return;

  const body = node.body;
  if (!t.isBlockStatement(body)) return;

  const properties = [];
  const statementsToRemove = [];

  for (const stmt of body.body) {
    if (!t.isVariableDeclaration(stmt) || stmt.kind !== "var") continue;
    if (stmt.declarations.length !== 1) continue;
    const decl = stmt.declarations[0];
    if (!t.isIdentifier(decl.id)) continue;

    const init = decl.init;
    if (!init) continue;

    if (t.isMemberExpression(init) && t.isIdentifier(init.object, { name: "_ref" })) {
      const key = init.property;
      const propKey = t.isIdentifier(key)
        ? key
        : t.isStringLiteral(key)
          ? t.stringLiteral(key.value)
          : null;
      if (!propKey) continue;
      properties.push(
        t.objectProperty(
          propKey,
          decl.id,
          false,
          t.isIdentifier(propKey) && propKey.name === decl.id.name,
        ),
      );
      statementsToRemove.push(stmt);
      continue;
    }

    if (
      t.isLogicalExpression(init, { operator: "||" }) &&
      t.isAssignmentExpression(init.left, { operator: "=" }) &&
      t.isMemberExpression(init.left.left) &&
      t.isIdentifier(init.left.left.object, { name: "_ref" })
    ) {
      const member = init.left.left;
      const key = member.property;
      const propKey = t.isIdentifier(key)
        ? key
        : t.isStringLiteral(key)
          ? t.stringLiteral(key.value)
          : null;
      if (!propKey) continue;
      const defaultValue = init.right;
      properties.push(
        t.objectProperty(propKey, t.assignmentPattern(decl.id, defaultValue)),
      );
      statementsToRemove.push(stmt);
    }
  }

  if (properties.length === 0) return;

  node.params = [t.objectPattern(properties)];
  body.body = body.body.filter((s) => !statementsToRemove.includes(s));
}

function convertFile(relPath) {
  const distPath = path.join(distDir, relPath);
  const outPath = path.join(srcDir, relPath.replace(/\.js$/, ".jsx"));
  const code = fs.readFileSync(distPath, "utf8");
  const ast = parse(code);

  let changed = true;
  while (changed) {
    changed = false;
    traverse(ast, {
      enter(path) {
        const before = path.node;
        createElementToJsx(path);
        if (path.node !== before) changed = true;
      },
    });
  }

  convertRefParams(ast);

  const { code: generated } = generate(ast, {
    retainLines: false,
    jsescOption: { minimal: true },
  });

  const out = generated
    .replace(/\/\*#__PURE__\*\*\//g, "")
    .replace(/return\s+<(\w)/g, "return <$1");

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, out);
}

function convertRefParams(ast) {
  traverse(ast, {
    FunctionDeclaration: refParamsToDestructuring,
    FunctionExpression: refParamsToDestructuring,
    ExportDefaultDeclaration(path) {
      const decl = path.node.declaration;
      if (t.isFunctionDeclaration(decl)) {
        refParamsToDestructuring(path.get("declaration"));
      }
    },
  });
}

function walk(dir, base = "") {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) walk(path.join(dir, entry.name), rel);
    else if (entry.name.endsWith(".js")) convertFile(rel);
  }
}

if (fs.existsSync(srcDir)) fs.rmSync(srcDir, { recursive: true, force: true });
fs.mkdirSync(srcDir, { recursive: true });
walk(distDir);
console.log("src/ generated from dist/");

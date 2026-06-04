#!/usr/bin/env node
/**
 * Calcula la próxima versión a publicar (semver patch).
 * Considera package.json, tags git v* y versiones en npm.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";

const PKG_NAME = "@fravelz/ui-kit-fravelz";

function parseVer(raw) {
  const m = String(raw).replace(/^v/, "").match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!m) throw new Error(`Versión semver inválida: ${raw}`);
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function toStr(parts) {
  return `${parts[0]}.${parts[1]}.${parts[2]}`;
}

function compare(a, b) {
  for (let i = 0; i < 3; i++) {
    if (a[i] !== b[i]) return a[i] - b[i];
  }
  return 0;
}

function maxVer(versions) {
  return versions.reduce((best, v) => (compare(parseVer(v), parseVer(best)) > 0 ? v : best));
}

function bumpPatch(version) {
  const p = parseVer(version);
  p[2] += 1;
  return toStr(p);
}

function gitTags() {
  try {
    return execSync('git tag -l "v*.*.*"', { encoding: "utf8" })
      .trim()
      .split("\n")
      .filter(Boolean);
  } catch {
    return [];
  }
}

function npmVersions() {
  try {
    const out = execSync(`npm view ${PKG_NAME} versions --json`, { encoding: "utf8" });
    const parsed = JSON.parse(out);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
}

function tagExists(tag) {
  try {
    execSync(`git rev-parse "${tag}^{}"`, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function remoteTagExists(tag) {
  try {
    const out = execSync(`git ls-remote --tags origin "${tag}"`, { encoding: "utf8" }).trim();
    return out.length > 0;
  } catch {
    return false;
  }
}

const pkgVersion = JSON.parse(fs.readFileSync("package.json", "utf8")).version;
const tags = gitTags();
const tagVersions = tags.map((t) => t.replace(/^v/, ""));
const npmVers = npmVersions();
const pool = [pkgVersion, ...tagVersions, ...npmVers].filter(Boolean);
const highest = pool.length ? maxVer(pool) : pkgVersion;

let release = compare(parseVer(pkgVersion), parseVer(highest)) >= 0 ? pkgVersion : bumpPatch(highest);

const tagName = `v${release}`;
if (tagExists(tagName) || remoteTagExists(tagName) || npmVers.includes(release)) {
  release = bumpPatch(maxVer([release, highest]));
}

while (tagExists(`v${release}`) || remoteTagExists(`v${release}`) || npmVers.includes(release)) {
  release = bumpPatch(release);
}

process.stdout.write(release);

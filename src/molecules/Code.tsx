/**
 * Code Component
 * Syntax-highlighted code block with copy-to-clipboard functionality
 */
import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";
import "./code-block.css";
import type { CodeLanguage } from "../types";
import { cn } from "../lib/cn";
import { IconCheck, IconCopy } from "../lib/icons";

export interface CodeProps {
  codeContent: string;
  language?: CodeLanguage;
  className?: string;
  /** Sin barra de idioma; botón copiar flotante a la derecha (imports de una línea) */
  compact?: boolean;
}

const LANGUAGE_LABEL: Record<string, string> = {
  javascript: "JavaScript",
  bash: "Bash",
  typescript: "TypeScript",
  markup: "Markup",
};

function resolveLanguage(content: string, language: CodeLanguage): string {
  if (language !== "javascript") {
    return language;
  }
  if (/<[A-Za-z]/.test(content)) {
    return "markup";
  }
  return "javascript";
}

export default function Code({
  codeContent,
  language = "javascript",
  className,
  compact = false,
}: CodeProps) {
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);
  const prismLanguage = resolveLanguage(codeContent, language);
  const langClass = `language-${prismLanguage}`;

  useEffect(() => {
    const el = codeRef.current;
    if (el) {
      Prism.highlightElement(el);
    }
  }, [codeContent, prismLanguage]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const copyLabel = isCopied ? "Copied" : "Copy";
  const CopyIcon = isCopied ? IconCheck : IconCopy;

  const copyButton = (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={isCopied ? "Copied to clipboard" : "Copy code to clipboard"}
      className={cn(
        "fz-code-block__copy",
        isCopied && "fz-code-block__copy--copied",
        compact && "fz-code-block__copy--overlay",
        "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
      )}
    >
      <CopyIcon className="!size-3.5 shrink-0" />
      <span>{copyLabel}</span>
    </button>
  );

  return (
    <div className={cn("fz-code-block", compact && "fz-code-block--compact", className)}>
      <div className="fz-code-block__shell">
        {!compact && (
          <div className="fz-code-block__toolbar">
            <span className="fz-code-block__lang">
              {LANGUAGE_LABEL[prismLanguage] ?? prismLanguage}
            </span>
            {copyButton}
          </div>
        )}

        {compact && copyButton}

        <pre className={cn("fz-code-block__pre", langClass)}>
          <code ref={codeRef} className={langClass}>
            {codeContent}
          </code>
        </pre>
      </div>
    </div>
  );
}

/**
 * Code Component
 * Syntax-highlighted code block with copy-to-clipboard functionality
 */
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-twilight.css";
import { cn } from "../lib/cn";

export default function Code({ codeContent, language = "javascript" }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [codeContent, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <div className="relative my-4">
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "absolute top-2 right-2 text-xs px-3 py-1.5 rounded-md transition-all duration-200",
          "cursor-pointer border border-cyan-500/30",
          isCopied
            ? "bg-cyan-600/20 text-cyan-300 border-cyan-400/60"
            : cn(
                "bg-gray-800 text-gray-300",
                "hover:bg-gray-700 hover:text-gray-200 hover:border-cyan-400/40"
              )
        )}
      >
        {isCopied ? "✓ Copied!" : "Copy"}
      </button>
      <pre
        className={cn(
          "rounded-lg bg-gray-900 text-sm overflow-x-auto p-4",
          "border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
        )}
      >
        <code className={`language-${language}`}>{codeContent}</code>
      </pre>
    </div>
  );
}

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Code Component
 * Syntax-highlighted code block with copy-to-clipboard functionality
 */
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-twilight.css";
import { cn } from "../lib/cn";
import { focusCyan } from "../lib/focus";
import { IconCheck, IconCopy } from "../lib/icons";
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
        }
        catch (error) {
            console.error("Error copying to clipboard:", error);
        }
    };
    return (_jsxs("div", { className: "relative my-4", children: [_jsx("button", { type: "button", onClick: handleCopy, "aria-label": isCopied ? "Copied to clipboard" : "Copy code to clipboard", className: cn("absolute top-2 right-2 inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-all duration-200", "cursor-pointer border border-cyan-500/30", focusCyan, isCopied
                    ? "bg-cyan-600/20 text-cyan-300 border-cyan-400/60"
                    : cn("bg-gray-800 text-gray-300", "hover:bg-gray-700 hover:text-gray-200 hover:border-cyan-400/40")), children: isCopied ? (_jsxs(_Fragment, { children: [_jsx(IconCheck, {}), _jsx("span", { children: "Copied" })] })) : (_jsxs(_Fragment, { children: [_jsx(IconCopy, {}), _jsx("span", { children: "Copy" })] })) }), _jsx("pre", { className: cn("rounded-lg bg-gray-900 text-sm overflow-x-auto p-4", "border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"), children: _jsx("code", { className: `language-${language}`, children: codeContent }) })] }));
}

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";
import "./code-block.css";
import type { CodeLanguage } from "../types";
export interface CodeProps {
    codeContent: string;
    language?: CodeLanguage;
    className?: string;
    /** Sin barra de idioma; botón copiar flotante a la derecha (imports de una línea) */
    compact?: boolean;
}
export default function Code({ codeContent, language, className, compact, }: CodeProps): import("react").JSX.Element;
//# sourceMappingURL=Code.d.ts.map
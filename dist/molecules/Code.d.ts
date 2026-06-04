import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-twilight.css";
import type { CodeLanguage } from "../types";
export interface CodeProps {
    codeContent: string;
    language?: CodeLanguage;
}
export default function Code({ codeContent, language }: CodeProps): import("react").JSX.Element;
//# sourceMappingURL=Code.d.ts.map
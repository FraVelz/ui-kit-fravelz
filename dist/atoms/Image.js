import { jsx as _jsx } from "react/jsx-runtime";
export default function Image({ source, alternateText, width = 100, height = 0, className = "", }) {
    const displayHeight = height === 0 ? width : height;
    return (_jsx("img", { src: source, alt: alternateText, width: width, height: displayHeight, draggable: false, className: className }));
}

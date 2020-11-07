"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generator(svgAst) {
    var _a;
    function createAttributeString(attr) {
        return Object.keys(attr)
            .map((key) => `${key}="${attr[key]}"`)
            .join(' ');
    }
    const svgAttr = createAttributeString(svgAst.attr);
    const elements = (_a = svgAst.body) === null || _a === void 0 ? void 0 : _a.map((node) => `<${node.tag} ${createAttributeString(node.attr)}></${node.tag}>`).join('\n\t');
    return `<svg ${svgAttr}>${elements}\n</svg>`;
}
exports.default = generator;
//# sourceMappingURL=generator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function transformer(AST) {
    var _a, _b;
    const svgAST = {
        tag: "svg",
        attr: {
            width: 100,
            height: 100,
            viewBox: '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg',
            version: '1.1'
        },
        body: [],
    };
    const defaultPenColor = 100;
    while (AST.body.length > 0) {
        const node = AST.body.shift();
        switch (node.name) {
            case types_1.SyntaxWords.PAPER:
                {
                    const paperColor = 100 - node.arguments[0].value;
                    const currentNode = {
                        tag: 'rect',
                        attr: {
                            width: 100,
                            height: 100,
                            x: 0,
                            y: 0,
                            fill: `rgb(${paperColor}%, ${paperColor}%,${paperColor}%)`
                        }
                    };
                    (_a = svgAST === null || svgAST === void 0 ? void 0 : svgAST.body) === null || _a === void 0 ? void 0 : _a.push(currentNode);
                    break;
                }
            case types_1.SyntaxWords.LINE: {
                const currentNode = {
                    tag: 'line',
                    attr: {
                        x1: node.arguments[0].value,
                        y1: node.arguments[1].value,
                        x2: node.arguments[2].value,
                        y2: node.arguments[3].value,
                        stroke: `rgb(${defaultPenColor}%, ${defaultPenColor}%,${defaultPenColor}%)`
                    }
                };
                (_b = svgAST === null || svgAST === void 0 ? void 0 : svgAST.body) === null || _b === void 0 ? void 0 : _b.push(currentNode);
                break;
            }
        }
    }
    return svgAST;
}
exports.default = transformer;
//# sourceMappingURL=transformer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function lexer(code) {
    return code.split(/\s+/)
        .filter(t => t.length > 0)
        .map((t) => isNaN(t)
        ? ({ type: types_1.TokenTypes.WORD, value: t })
        : ({ type: types_1.TokenTypes.NUMBER, value: t }));
}
exports.default = lexer;
//# sourceMappingURL=lexer.js.map
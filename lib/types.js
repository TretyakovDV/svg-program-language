"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentTypes = exports.ExpressionTypes = exports.ASTTypes = exports.TokenTypes = exports.SyntaxWords = void 0;
var SyntaxWords;
(function (SyntaxWords) {
    SyntaxWords["PAPER"] = "Paper";
    SyntaxWords["PEN"] = "Pen";
    SyntaxWords["LINE"] = "Line";
})(SyntaxWords = exports.SyntaxWords || (exports.SyntaxWords = {}));
var TokenTypes;
(function (TokenTypes) {
    TokenTypes["WORD"] = "word";
    TokenTypes["NUMBER"] = "number";
})(TokenTypes = exports.TokenTypes || (exports.TokenTypes = {}));
var ASTTypes;
(function (ASTTypes) {
    ASTTypes["DRAWING"] = "Drawing";
})(ASTTypes = exports.ASTTypes || (exports.ASTTypes = {}));
var ExpressionTypes;
(function (ExpressionTypes) {
    ExpressionTypes["CALL_EXPRESSION"] = "CallExpression";
})(ExpressionTypes = exports.ExpressionTypes || (exports.ExpressionTypes = {}));
var ArgumentTypes;
(function (ArgumentTypes) {
    ArgumentTypes["NUMBER_LITERAL"] = "NumberLiteral";
})(ArgumentTypes = exports.ArgumentTypes || (exports.ArgumentTypes = {}));
//# sourceMappingURL=types.js.map
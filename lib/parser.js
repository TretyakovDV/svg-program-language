"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function parser(tokens) {
    const AST = {
        type: types_1.ASTTypes.DRAWING,
        body: []
    };
    const findArguments = (type, quantity) => {
        let pointer = 0;
        const argumentList = [];
        while (quantity > pointer) {
            const token = tokens.shift();
            if (!token || token.type === types_1.TokenTypes.WORD)
                throw 'Error';
            if (token.value < 0 || token.value > 100)
                throw 'Error';
            const argument = {
                type: types_1.ArgumentTypes.NUMBER_LITERAL,
                value: Number(token.value),
            };
            argumentList.push(argument);
            pointer++;
        }
        return argumentList;
    };
    while (tokens.length > 0) {
        const currentToken = tokens.shift();
        if ((currentToken === null || currentToken === void 0 ? void 0 : currentToken.type) === types_1.TokenTypes.WORD) {
            switch (currentToken.value) {
                case types_1.SyntaxWords.PAPER: {
                    const expression = {
                        type: types_1.ExpressionTypes.CALL_EXPRESSION,
                        name: types_1.SyntaxWords.PAPER,
                        arguments: []
                    };
                    const args = findArguments(types_1.SyntaxWords.PAPER, 1);
                    expression.arguments = expression.arguments.concat(args);
                    AST.body.push(expression);
                    break;
                }
                case types_1.SyntaxWords.LINE:
                    {
                        const expression = {
                            type: types_1.ExpressionTypes.CALL_EXPRESSION,
                            name: types_1.SyntaxWords.LINE,
                            arguments: []
                        };
                        const args = findArguments(types_1.SyntaxWords.LINE, 4);
                        expression.arguments = expression.arguments.concat(args);
                        AST.body.push(expression);
                        break;
                    }
            }
        }
    }
    return AST;
}
exports.default = parser;
//# sourceMappingURL=parser.js.map
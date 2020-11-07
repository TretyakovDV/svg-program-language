import {
    AbstractSyntaxTreeType,
    ArgumentType,
    ArgumentTypes,
    ASTTypes,
    ExpressionType,
    ExpressionTypes,
    SyntaxWords,
    TokenType,
    TokenTypes
} from "./types";

function parser(tokens: Array<TokenType>): AbstractSyntaxTreeType {
    // AST - Abstract Syntax Tree
    const AST: AbstractSyntaxTreeType = {
        type: ASTTypes.DRAWING,
        body: []
    };

    const findArguments = (type: string, quantity: number) => {
        let pointer: number = 0;
        const argumentList: any = [];
        while (quantity > pointer) {
            const token: TokenType | undefined = tokens.shift();
            if (!token || token.type === TokenTypes.WORD) throw 'Error';
            if (token.value < 0 || token.value > 100) throw 'Error';

            const argument: ArgumentType = {
                type: ArgumentTypes.NUMBER_LITERAL,
                value: Number(token.value),
            }

            argumentList.push(argument);

            pointer++;
        }
        return argumentList;
    }

    while (tokens.length > 0) {
        const currentToken: TokenType | undefined = tokens.shift();

        if(currentToken?.type === TokenTypes.WORD) {
            switch (currentToken.value) {
                case SyntaxWords.PAPER: {
                    const expression: ExpressionType = {
                        type: ExpressionTypes.CALL_EXPRESSION,
                        name: SyntaxWords.PAPER,
                        arguments: []
                    }

                    const args: Array<ArgumentType> = findArguments(SyntaxWords.PAPER, 1);
                    expression.arguments = expression.arguments.concat(args);
                    AST.body.push(expression);
                    break;
                }
                case SyntaxWords.LINE:
                {
                    const expression: ExpressionType = {
                        type: ExpressionTypes.CALL_EXPRESSION,
                        name: SyntaxWords.LINE,
                        arguments: []
                    }

                    const args: Array<ArgumentType> = findArguments(SyntaxWords.LINE, 4);
                    expression.arguments = expression.arguments.concat(args);
                    AST.body.push(expression);
                    break;
                }
            }
        }
    }
    return AST;
}

export default parser;

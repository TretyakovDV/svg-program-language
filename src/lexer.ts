import {TokenType, TokenTypes} from "./types";

function lexer(code: string): Array<TokenType> {
    return code.split(/\s+/)
        .filter(t => t.length > 0)
        .map((t:any) => isNaN(t)
            ? ({type: TokenTypes.WORD, value: t})
            : ({type: TokenTypes.NUMBER, value: t}));
}

export default lexer

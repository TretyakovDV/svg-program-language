export enum SyntaxWords {
    PAPER = 'Paper',
    PEN = 'Pen',
    LINE = 'Line'
}

export enum TokenTypes {
    WORD = 'word',
    NUMBER = 'number'
}

export enum ASTTypes {
    DRAWING = 'Drawing'
}

export enum ExpressionTypes {
    CALL_EXPRESSION = 'CallExpression'
}

export enum ArgumentTypes {
    NUMBER_LITERAL = 'NumberLiteral'
}

export type TokenType = {
    type: 'word' | 'number'
    value: SyntaxWords | number
}

export type AbstractSyntaxTreeType = {
    type: ASTTypes
    body: Array<any>
}

export type ArgumentType = {
    type: ArgumentTypes
    value: number
}

export type ExpressionType = {
    type: ExpressionTypes
    name: SyntaxWords
    arguments: Array<ArgumentType>
}

export type SVGASTAttributeType = {
    width?: number | undefined
    height?: number | undefined
    viewBox?: string | undefined
    xmlns?: string | undefined
    version?: string | undefined
    x?: number | undefined
    y?: number | undefined
    x1?: number | undefined
    y1?: number | undefined
    x2?: number | undefined
    y2?: number | undefined
    fill?: string | undefined
    stroke?: string | undefined
}

export type SVGASTType = {
    tag: string
    attr: SVGASTAttributeType
    body?: Array<SVGASTType>
}

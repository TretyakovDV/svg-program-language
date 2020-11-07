import {AbstractSyntaxTreeType, SVGASTType, ExpressionType, SyntaxWords} from "./types";

function transformer (AST: AbstractSyntaxTreeType): SVGASTType {
    const svgAST: SVGASTType = {
        tag: "svg",
        attr: {
            width: 100,
            height: 100,
            viewBox: '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg',
            version: '1.1'
        },
        body: [],
    }

    const defaultPenColor: number = 100;

    while (AST.body.length > 0) {
        const node: ExpressionType = AST.body.shift();

        switch (node.name) {
            case SyntaxWords.PAPER:
            {
                const paperColor: number = 100 - node.arguments[0].value;

                const currentNode: SVGASTType = {
                    tag: 'rect',
                    attr: {
                        width: 100,
                        height: 100,
                        x: 0,
                        y: 0,
                        fill: `rgb(${paperColor}%, ${paperColor}%,${paperColor}%)`
                    }
                }

                svgAST?.body?.push(currentNode)
                break;
            }
            case SyntaxWords.LINE: {
                const currentNode: SVGASTType = {
                    tag: 'line',
                    attr: {
                        x1: node.arguments[0].value,
                        y1: node.arguments[1].value,
                        x2: node.arguments[2].value,
                        y2: node.arguments[3].value,
                        stroke: `rgb(${defaultPenColor}%, ${defaultPenColor}%,${defaultPenColor}%)`
                    }
                }

                svgAST?.body?.push(currentNode)
                break;
            }
        }
    }


    return svgAST;
}

export default transformer;

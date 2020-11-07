import {SVGASTType} from "./types";

function generator(svgAst: SVGASTType): string {
    function createAttributeString(attr: any): string {
        return Object.keys(attr)
            .map((key: string) => `${key}="${attr[key]}"`)
                .join(' ');
    }

    const svgAttr: string = createAttributeString(svgAst.attr);

    const elements: string | undefined = svgAst.body?.map((node: SVGASTType) =>
        `<${node.tag} ${createAttributeString(node.attr)}></${node.tag}>`)
        .join('\n\t');

    return `<svg ${svgAttr}>${elements}\n</svg>`;
}

export default generator;

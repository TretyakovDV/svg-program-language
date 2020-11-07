import fs from 'fs';
import path from "path";

import lexer from "./lexer";
import parser from "./parser";
import transformer from "./transformer";
import generator from "./generator";

const content = fs.readFileSync(path.resolve(process.argv[2]), 'utf8');

console.log("generator => ", generator(transformer(parser(lexer(content)))))

fs.writeFile('test.svg', generator(transformer(parser(lexer(content)))), () => {})




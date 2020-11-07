"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const lexer_1 = __importDefault(require("./lexer"));
const parser_1 = __importDefault(require("./parser"));
const transformer_1 = __importDefault(require("./transformer"));
const generator_1 = __importDefault(require("./generator"));
const content = fs_1.default.readFileSync(path_1.default.resolve(process.argv[2]), 'utf8');
console.log("generator => ", generator_1.default(transformer_1.default(parser_1.default(lexer_1.default(content)))));
fs_1.default.writeFile('test.svg', generator_1.default(transformer_1.default(parser_1.default(lexer_1.default(content)))), () => { });
//# sourceMappingURL=index.js.map
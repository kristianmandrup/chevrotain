import { parser } from './python-parser'
import {
    PythonParser
} from '../../../'

let expect = require("chai").expect

// reuse the same parser instance.
var parser = new MultiStartParser([]);

function parseStartingWithRule(ruleName) {
    return function(text) {
        var lexResult = PythonLexer.tokenize(text);
        // setting a new input will RESET the parser instance's state.
        parser.input = lexResult.tokens
        // just invoke which ever rule you want as the start rule. its all just plain javascript...
        var value = parser[ruleName]()

        return {
            value:       value, // this is a pure grammar, the value will always be <undefined>
            lexErrors:   lexResult.errors,
            parseErrors: parser.errors
        };
    }
}

describe('The Chevrotain Lexer ability to parse python like indentation.', () => {

    const goodCode = `
if ax then
    bx
else
    cx
end
`

    const badCode = `
if ax then
bx
    else
    cx
end
`

    it('Can Parse a simple python style if-else ', () => {
        let ifElseRule = parseStartingWithRule('ifElse')
        let result = ifElseRule()

        expect(parser).to.be.instanceof(Parser)
    })
})
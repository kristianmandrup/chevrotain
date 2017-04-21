import { PythonParser, parserRule } from './python-parser'
let expect = require("chai").expect

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

    it('a Parser class and instance is defined', () => {
        expect(PythonParser).to.be.a(Parser)
    })

    it('a Parser instance is defined', () => {
        expect(parser).to.exist
        expect(parser).to.be.instanceof(PythonParser)
    })

    it('Can Parse a simple python style if-else ', () => {
        let ifElseRule = parserRule('ifElse')
        let result = ifElseRule(goodCode)

        expect(parser).to.be.instanceof(Parser)
    })

    it('Cannot Parse a badly indented python style if-else ', () => {
        let ifElseRule = parserRule('ifElse')
        let result = ifElseRule(badCode)

        expect(parser).to.be.instanceof(Parser)
    })    
})
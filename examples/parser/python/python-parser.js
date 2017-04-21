import {
    Indent,
    Outdent,
    If,
    Else,
    Then,
    Var
} from '../../lexer/python_indentation/python_indentation'

import {
    Parser 
} from 'chevrotain'

// reuse the same parser instance.
const parser = new PythonParser([]);

export function parserRule(ruleName) {
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
export class PytonParser extends Parser {

    constructor(input) {
        super(input, allTokens)

        // if ax then
        //     bx
        // else
        //     cx
        // end
        this.RULE("ifElse", () => {
            this.CONSUME(If)
            this.CONSUME(Var)
            this.CONSUME(Then)
            this.CONSUME(Indent)
            this.CONSUME(Var)
            this.CONSUME(Outdent)
            this.CONSUME(Else)
            this.CONSUME(Indent)
            this.CONSUME(Var)
            this.CONSUME(Outdent)
        })        
    }
}


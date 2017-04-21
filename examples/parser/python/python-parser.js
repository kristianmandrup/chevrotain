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


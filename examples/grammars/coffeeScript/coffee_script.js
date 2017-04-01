const Lexer = require('coffeescript/lib/coffeescript/lexer').Lexer;
lexer = new Lexer;

var tokens = lexer.tokenize(`
class True extends Token
  @PATTERN: /true/
`)
var x = 5;

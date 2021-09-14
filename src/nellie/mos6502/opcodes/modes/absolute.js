/* nellie/opcodes/modes/absolute.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessAbsolute(instruction, processor) {} // preprocessAbsolute()

var MODE_ABSOLUTE = new Ellie.Opcode.Mode(
  'absolute',
  preprocessAbsolute
);

module.exports = MODE_ABSOLUTE;

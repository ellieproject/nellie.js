/* nellie/opcodes/modes/absolute.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteAbsolute(instruction, processor) {} // preexecuteAbsolute()

var MODE_ABSOLUTE = new Ellie.Opcode.Mode(
  'absolute',
  preexecuteAbsolute
);

module.exports = MODE_ABSOLUTE;

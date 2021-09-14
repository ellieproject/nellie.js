/* nellie/opcodes/modes/absolute_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessAbsoluteX(instruction, processor) {} // preprocessAbsoluteX()

var MODE_ABSOLUTE_X = new Ellie.Opcode.Mode(
  'absolute x',
  preprocessAbsoluteX
);

module.exports = MODE_ABSOLUTE_X;

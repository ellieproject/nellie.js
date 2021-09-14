/* nellie/opcodes/modes/absolute_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessAbsoluteY(instruction, processor) {} // preprocessAbsoluteY()

var MODE_ABSOLUTE_Y = new Ellie.Opcode.Mode(
  'absolute y',
  preprocessAbsoluteY
);

module.exports = MODE_ABSOLUTE_Y;

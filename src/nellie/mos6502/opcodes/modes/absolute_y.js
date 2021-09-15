/* nellie/opcodes/modes/absolute_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteAbsoluteY(instruction, processor) {} // preexecuteAbsoluteY()

var MODE_ABSOLUTE_Y = new Ellie.Opcode.Mode(
  'absolute y',
  preexecuteAbsoluteY
);

module.exports = MODE_ABSOLUTE_Y;

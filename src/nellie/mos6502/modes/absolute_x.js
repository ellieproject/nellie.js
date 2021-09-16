/* nellie/mos6502/modes/absolute_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteAbsoluteX(instruction, processor) {} // preexecuteAbsoluteX()

var MODE_ABSOLUTE_X = new Ellie.Opcode.Mode(
  'absolute x',
  preexecuteAbsoluteX
);

module.exports = MODE_ABSOLUTE_X;

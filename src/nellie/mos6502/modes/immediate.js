/* nellie/mos6502/modes/immediate.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteImmediate(instruction, processor) {} // preexecuteImmediate()

var MODE_IMMEDIATE = new Ellie.Opcode.Mode(
  'immediate',
  preexecuteImmediate
);

module.exports = MODE_IMMEDIATE;

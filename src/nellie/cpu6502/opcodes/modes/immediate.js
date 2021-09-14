/* nellie/opcodes/modes/immediate.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessImmediate(instruction, processor) {} // preprocessImmediate()

var MODE_IMMEDIATE = new Ellie.Opcode.Mode(
  'immediate',
  preprocessImmediate
);

module.exports = MODE_IMMEDIATE;

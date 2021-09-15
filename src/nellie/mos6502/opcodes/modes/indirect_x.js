/* nellie/opcodes/modes/indirect_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteIndirectX(instruction, processor) {} // preexecuteIndirectX()

var MODE_INDIRECT_X = new Ellie.Opcode.Mode(
  'indirect (pre-x)',
  preexecuteIndirectX
);

module.exports = MODE_INDIRECT_X;

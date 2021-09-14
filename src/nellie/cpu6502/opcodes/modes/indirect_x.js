/* nellie/opcodes/modes/indirect_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessIndirectX(instruction, processor) {} // preprocessIndirectX()

var MODE_INDIRECT_X = new Ellie.Opcode.Mode(
  'indirect (pre-x)',
  preprocessIndirectX
);

module.exports = MODE_INDIRECT_X;

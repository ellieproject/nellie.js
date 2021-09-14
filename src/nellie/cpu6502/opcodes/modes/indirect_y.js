/* nellie/opcodes/modes/indirect_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessIndirectY(instruction, processor) {} // preprocessIndirectY()

var MODE_INDIRECT_Y = new Ellie.Opcode.Mode(
  'indirect (post-y)',
  preprocessIndirectY
);

module.exports = MODE_INDIRECT_Y;

/* nellie/opcodes/modes/indirect.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessIndirect(instruction, processor) {} // preprocessIndirect()

var MODE_INDIRECT = new Ellie.Opcode.Mode(
  'indirect',
  preprocessIndirect
);

module.exports = MODE_INDIRECT;

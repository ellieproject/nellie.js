/* nellie/opcodes/modes/indirect.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteIndirect(instruction, processor) {} // preexecuteIndirect()

var MODE_INDIRECT = new Ellie.Opcode.Mode(
  'indirect',
  preexecuteIndirect
);

module.exports = MODE_INDIRECT;

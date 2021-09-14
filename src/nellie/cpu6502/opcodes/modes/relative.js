/* nellie/opcodes/modes/relative.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessRelative(instruction, processor) {} // preprocessRelative()

var MODE_RELATIVE = new Ellie.Opcode.Mode(
  'relative',
  preprocessRelative
);

module.exports = MODE_RELATIVE;

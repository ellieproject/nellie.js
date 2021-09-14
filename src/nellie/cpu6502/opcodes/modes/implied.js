/* nellie/opcodes/modes/implied.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessImplied(instruction, processor) {} // preprocessImplied()

var MODE_IMPLIED = new Ellie.Opcode.Mode(
  'implied',
  preprocessImplied
);

module.exports = MODE_IMPLIED;

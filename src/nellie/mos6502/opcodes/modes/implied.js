/* nellie/opcodes/modes/implied.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessImplied() { // instruction, processor unused
  // do nothing
  return null;
} // preprocessImplied()

var MODE_IMPLIED = new Ellie.Opcode.Mode(
  'implied',
  preprocessImplied
);

module.exports = MODE_IMPLIED;

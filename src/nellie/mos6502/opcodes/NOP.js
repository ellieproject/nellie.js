/* nellie/opcodes/NOP.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeNOP() { // instruction, processor unused
  console.debug(this.name);
  return true;
} // executeNOP()

const NOP = new Ellie.Opcode(
  'NOP',
  'No Operation',
  executeNOP
); // NOP

NOP.addAddressingMode(0xEA, MODES.IMPLIED);

module.exports = NOP;

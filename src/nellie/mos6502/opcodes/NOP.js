/* nellie/opcodes/NOP.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeNOP() { // instruction, processor, result unused
  console.debug(this.name);
  return;
} // executeNOP()

const NOP = new Ellie.Opcode(
  'NOP',
  'No Operation',
  executeNOP
); // NOP

NOP.addAddressingMode(0xEA, MODES.IMPLIED);

module.exports = NOP;

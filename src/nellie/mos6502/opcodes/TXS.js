/* nellie/mos6502/opcodes/TXS.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeTXS(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeTXS()

const TXS = new Ellie.Opcode(
  'TXS',
  'Transfer X to Stack Pointer',
  executeTXS
); // TXS

TXS.addAddressingMode(0x9A, MODES.IMPLIED);

module.exports = TXS;

/* nellie/mos6502/opcodes/BCC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBCC(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBCC()

const BCC = new Ellie.Opcode(
  'BCC',
  'Branch on Carry Clear',
  executeBCC
); // BCC

BCC.addAddressingMode(0x90, MODES.IMPLIED);

module.exports = BCC;

/* nellie/mos6502/opcodes/BCS.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBCS(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBCS()

const BCS = new Ellie.Opcode(
  'BCS',
  'Branch on Carry Set',
  executeBCS
); // BCS

BCS.addAddressingMode(0xB0, MODES.IMPLIED);

module.exports = BCS;

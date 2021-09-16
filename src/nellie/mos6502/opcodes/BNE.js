/* nellie/mos6502/opcodes/BNE.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBNE(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBNE()

const BNE = new Ellie.Opcode(
  'BNE',
  'Branch on Result not Zero',
  executeBNE
); // BNE

BNE.addAddressingMode(0xD0, MODES.IMPLIED);

module.exports = BNE;

/* nellie/mos6502/opcodes/BRK.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBRK(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBRK()

const BRK = new Ellie.Opcode(
  'BRK',
  'Force Break',
  executeBRK
); // BRK

BRK.addAddressingMode(0x00, MODES.IMMEDIATE);

module.exports = BRK;

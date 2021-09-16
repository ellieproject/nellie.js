/* nellie/mos6502/opcodes/SED.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeSED(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('D', 1);
  return true;
} // executeSED()

const SED = new Ellie.Opcode(
  'SED',
  'Set Decimal Mode',
  executeSED
); // SED

SED.addAddressingMode(0xF8, MODES.IMPLIED);

module.exports = SED;

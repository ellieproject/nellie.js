/* nellie/mos6502/operations/SED.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeSED(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('D', 1);
  return true;
} // executeSED()

const SED = new Ellie.Processor.Operation(
  'SED',
  'Set Decimal Mode',
  executeSED
); // SED

SED.addMode(0xF8, MODES.IMPLIED);

module.exports = SED;

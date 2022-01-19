/* nellie/mos6502/operations/SED.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeSEDTick(processor) {
  processor.register.p.bitSet('D', 1);
  return true;
} // executeSEDTick()

const SED = new Ellie.Processor.Operation(
  'SED',
  'Set Decimal Mode',
  executeSEDTick
); // SED

SED.addMode(0xF8, MODES.IMPLIED);

module.exports = SED;

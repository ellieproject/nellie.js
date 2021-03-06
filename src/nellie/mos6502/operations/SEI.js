/* nellie/mos6502/operations/SEI.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeSEITick(processor) {
  processor.register.p.bitSet('I', 1);
  return true;
} // executeSEITick()

const SEI = new Ellie.Processor.Operation(
  'SEI',
  'Set Interrupt Disable Status',
  executeSEITick
); // SEI

SEI.addMode(0x78, MODES.IMPLIED);

module.exports = SEI;

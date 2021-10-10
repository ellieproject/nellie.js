/* nellie/mos6502/operations/SEI/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeSEI(processor) {
  processor.register.p.bitSet('I', 1);
  return true;
} // executeSEI()

const SEI = new Ellie.Processor.Operation(
  'SEI',
  'Set Interrupt Disable Status',
  executeSEI
); // SEI

SEI.addMode(0x78, MODES.IMPLIED);

module.exports = SEI;

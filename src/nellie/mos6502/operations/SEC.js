/* nellie/mos6502/operations/SEC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeSECTick(processor) {
  processor.register.p.bitSet('C', 1);
  return true;
} // executeSECTick()

const SEC = new Ellie.Processor.Operation(
  'SEC',
  'Set Carry Flag',
  executeSECTick
); // SEC

SEC.addMode(0x38, MODES.IMPLIED);

module.exports = SEC;

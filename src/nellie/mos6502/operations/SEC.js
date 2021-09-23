/* nellie/mos6502/operations/SEC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeSEC(processor) {
  processor.register.p.bitSet('C', 1);
  return true;
} // executeSEC()

const SEC = new Ellie.Processor.Operation(
  'SEC',
  'Set Carry Flag',
  executeSEC
); // SEC

SEC.addMode(0x38, MODES.IMPLIED);

module.exports = SEC;

/* nellie/mos6502/operations/CLC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCLC(processor) {
  processor.register.p.bitSet('C', 0);
  return true;
} // executeCLC()

const CLC = new Ellie.Processor.Operation(
  'CLC',
  'Clear Carry Flag',
  executeCLC
); // CLC

CLC.addMode(0x18, MODES.IMPLIED);

module.exports = CLC;

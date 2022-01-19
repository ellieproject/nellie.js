/* nellie/mos6502/operations/CLC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeCLCTick(processor) {
  processor.register.p.bitSet('C', 0);
  return true;
} // executeCLCTick()

const CLC = new Ellie.Processor.Operation(
  'CLC',
  'Clear Carry Flag',
  executeCLCTick
); // CLC

CLC.addMode(0x18, MODES.IMPLIED);

module.exports = CLC;

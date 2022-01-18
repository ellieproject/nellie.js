/* nellie/mos6502/operations/CLD/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeCLDTick(processor) {
  processor.register.p.bitSet('D', 0);
  return true;
} // executeCLDTick()

const CLD = new Ellie.Processor.Operation(
  'CLD',
  'Clear Decimal Mode',
  executeCLDTick
); // CLD

CLD.addMode(0xD8, MODES.IMPLIED);

module.exports = CLD;

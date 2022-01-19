/* nellie/mos6502/operations/CLV.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeCLVTick(processor) {
  processor.register.p.bitSet('V', 0);
  return true;
} // executeCLVTick()

const CLV = new Ellie.Processor.Operation(
  'CLV',
  'Clear Overflow Flag',
  executeCLVTick
); // CLV

CLV.addMode(0xB8, MODES.IMPLIED);

module.exports = CLV;

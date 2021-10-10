/* nellie/mos6502/operations/CLV/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCLV(processor) {
  processor.register.p.bitSet('V', 0);
  return true;
} // executeCLV()

const CLV = new Ellie.Processor.Operation(
  'CLV',
  'Clear Overflow Flag',
  executeCLV
); // CLV

CLV.addMode(0xB8, MODES.IMPLIED);

module.exports = CLV;

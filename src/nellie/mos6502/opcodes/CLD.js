/* nellie/mos6502/opcodes/CLD.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCLD(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('D', 0);
  return true;
} // executeCLD()

const CLD = new Ellie.Processor.Operation(
  'CLD',
  'Clear Decimal Mode',
  executeCLD
); // CLD

CLD.addMode(0xD8, MODES.IMPLIED);

module.exports = CLD;

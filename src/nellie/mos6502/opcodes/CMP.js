/* nellie/mos6502/opcodes/CMP.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCMP(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeCMP()

const CMP = new Ellie.Processor.Operation(
  'CMP',
  'Compare Memory with A',
  executeCMP
); // CMP

CMP.addMode(0xDD, MODES.ABSOLUTE_X);
CMP.addMode(0xD9, MODES.ABSOLUTE_Y);
CMP.addMode(0xCD, MODES.ABSOLUTE);
CMP.addMode(0xC9, MODES.IMMEDIATE);
CMP.addMode(0xC1, MODES.INDIRECT_X);
CMP.addMode(0xD1, MODES.INDIRECT_Y);
CMP.addMode(0xD5, MODES.ZERO_PAGE_X);
CMP.addMode(0xC5, MODES.ZERO_PAGE);

module.exports = CMP;

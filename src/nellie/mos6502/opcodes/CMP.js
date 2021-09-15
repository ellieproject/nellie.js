/* nellie/opcodes/CMP.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeCMP(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeCMP()

const CMP = new Ellie.Opcode(
  'CMP',
  'Compare Memory with A',
  executeCMP
); // CMP

CMP.addAddressingMode(0xDD, MODES.ABSOLUTE_X);
CMP.addAddressingMode(0xD9, MODES.ABSOLUTE_Y);
CMP.addAddressingMode(0xCD, MODES.ABSOLUTE);
CMP.addAddressingMode(0xC9, MODES.IMMEDIATE);
CMP.addAddressingMode(0xC1, MODES.INDIRECT_X);
CMP.addAddressingMode(0xD1, MODES.INDIRECT_Y);
CMP.addAddressingMode(0xD5, MODES.ZERO_PAGE_X);
CMP.addAddressingMode(0xC5, MODES.ZERO_PAGE);

module.exports = CMP;

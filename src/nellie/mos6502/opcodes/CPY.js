/* nellie/mos6502/opcodes/CPY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCPY(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeCPY()

const CPY = new Ellie.Opcode(
  'CPY',
  'Compare Memory with Y',
  executeCPY
); // CPY

CPY.addAddressingMode(0xCC, MODES.ABSOLUTE);
CPY.addAddressingMode(0xC0, MODES.IMMEDIATE);
CPY.addAddressingMode(0xC4, MODES.ZERO_PAGE);

module.exports = CPY;

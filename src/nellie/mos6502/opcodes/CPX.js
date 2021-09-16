/* nellie/mos6502/opcodes/CPX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCPX(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeCPX()

const CPX = new Ellie.Opcode(
  'CPX',
  'Compare Memory with X',
  executeCPX
); // CPX

CPX.addAddressingMode(0xEC, MODES.ABSOLUTE);
CPX.addAddressingMode(0xE0, MODES.IMMEDIATE);
CPX.addAddressingMode(0xE4, MODES.ZERO_PAGE);

module.exports = CPX;

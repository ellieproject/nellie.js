/* nellie/opcodes/LDY.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeLDY(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeLDY()

const LDY = new Ellie.Opcode(
  'LDY',
  'Load Y from Memory',
  executeLDY
); // LDY

LDY.addAddressingMode(0xBC, MODES.ABSOLUTE_Y);
LDY.addAddressingMode(0xAC, MODES.ABSOLUTE);
LDY.addAddressingMode(0xA0, MODES.IMMEDIATE);
LDY.addAddressingMode(0xB4, MODES.ZERO_PAGE_Y);
LDY.addAddressingMode(0xA4, MODES.ZERO_PAGE);

module.exports = LDY;

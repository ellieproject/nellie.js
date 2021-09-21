/* nellie/mos6502/opcodes/LDY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeLDY(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeLDY()

const LDY = new Ellie.Processor.Operation(
  'LDY',
  'Load Y from Memory',
  executeLDY
); // LDY

LDY.addMode(0xBC, MODES.ABSOLUTE_Y);
LDY.addMode(0xAC, MODES.ABSOLUTE);
LDY.addMode(0xA0, MODES.IMMEDIATE);
LDY.addMode(0xB4, MODES.ZERO_PAGE_Y);
LDY.addMode(0xA4, MODES.ZERO_PAGE);

module.exports = LDY;

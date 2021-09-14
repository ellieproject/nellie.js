/* nellie/opcodes/STY.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeSTY(instruction, processor) {
  console.debug(this.name);
  return;
} // executeSTY()

const STY = new Ellie.Opcode(
  'STY',
  'Store Y to Memory',
  executeSTY
); // STY

STY.addAddressingMode(0x8C, MODES.ABSOLUTE);
STY.addAddressingMode(0x94, MODES.ZERO_PAGE_X);
STY.addAddressingMode(0x84, MODES.ZERO_PAGE);

module.exports = STY;

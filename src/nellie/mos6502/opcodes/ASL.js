/* nellie/opcodes/ASL.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeASL(instruction, processor) {
  console.debug(this.name);
  return;
} // executeASL()

const ASL = new Ellie.Opcode(
  'ASL',
  'Shift Left One Bit',
  executeASL
); // ASL

ASL.addAddressingMode(0x1E, MODES.ABSOLUTE_X);
ASL.addAddressingMode(0x0E, MODES.ABSOLUTE);
ASL.addAddressingMode(0x0A, MODES.ACCUMULATOR);
ASL.addAddressingMode(0x16, MODES.ZERO_PAGE_X);
ASL.addAddressingMode(0x06, MODES.ZERO_PAGE);

module.exports = ASL;

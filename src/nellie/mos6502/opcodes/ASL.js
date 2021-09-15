/* nellie/opcodes/ASL.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeASL(instruction, processor, result) {
  console.debug(this.name);
  // result[7] => carry flag
  processor.register.p.bitSet('C', (result >> 7) & 0x1);
  // shift left
  result <<= 1;
  // negative flag check
  processor.register.p.bitSet('N', (result >> 7) & 0x1);
  // zero flag check
  processor.register.p.bitSet('Z', result === 0x0);
  return result;
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

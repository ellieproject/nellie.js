/* nellie/opcodes/LSR.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeLSR(instruction, processor, result) {
  console.debug(this.name);
  // result[0] => carry flag
  processor.register.p.bitSet('C', (result >> 0) & 0x1);
  // shift right
  result >>= 1;
  // clear bit 7
  result &= ~(0x1 << 7);
  // negative flag check
  processor.register.p.bitSet('N', (result >> 7) & 0x1);
  // zero flag check
  processor.register.p.bitSet('Z', result === 0x0);
  return result;
} // executeLSR()

const LSR = new Ellie.Opcode(
  'LSR',
  'Shift Right One Bit',
  executeLSR
); // LSR

LSR.addAddressingMode(0x5E, MODES.ABSOLUTE_X);
LSR.addAddressingMode(0x4E, MODES.ABSOLUTE);
LSR.addAddressingMode(0x4A, MODES.ACCUMULATOR);
LSR.addAddressingMode(0x56, MODES.ZERO_PAGE_X);
LSR.addAddressingMode(0x46, MODES.ZERO_PAGE);

module.exports = LSR;

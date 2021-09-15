/* nellie/opcodes/LSR.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeLSR(instruction, processor) {
  console.debug(this.name);
  const b = processor.register.b;
  // buffer[0] => carry flag
  processor.register.p.bitSet('C', b.bit(0));
  // shift right
  b.set(b.get() >> 1);
  // clear bit 7
  b.bitSet(7, 0);
  // negative flag check
  processor.register.p.bitSet('N', b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', b.test(0x0));
  return true;
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

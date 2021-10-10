/* nellie/mos6502/operations/LSR/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeLSR(processor) {
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
  processor.register.p.bitSet('Z', b.test(0x00));
  return true;
} // executeLSR()

const LSR = new Ellie.Processor.Operation(
  'LSR',
  'Shift Right One Bit',
  executeLSR
); // LSR

LSR.addMode(0x5E, MODES.ABSOLUTE_X);
LSR.addMode(0x4E, MODES.ABSOLUTE);
LSR.addMode(0x4A, MODES.ACCUMULATOR);
LSR.addMode(0x56, MODES.ZERO_PAGE_X);
LSR.addMode(0x46, MODES.ZERO_PAGE);

module.exports = LSR;

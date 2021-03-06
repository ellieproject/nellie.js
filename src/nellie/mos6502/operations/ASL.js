/* nellie/mos6502/operations/ASL.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeASLTick(processor) {
  const b = processor.register.b;
  // buffer[7] => carry flag
  processor.register.p.bitSet('C', b.bit(7));
  // shift left
  b.set(b.get() << 1);
  // negative flag check
  processor.register.p.bitSet('N', b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', b.test(0x00));
  return true;
} // executeASLTick()

const ASL = new Ellie.Processor.Operation(
  'ASL',
  'Shift Left One Bit',
  executeASLTick
); // ASL

ASL.addMode(0x1E, MODES.ABSOLUTE_X);
ASL.addMode(0x0E, MODES.ABSOLUTE);
ASL.addMode(0x0A, MODES.ACCUMULATOR);
ASL.addMode(0x16, MODES.ZERO_PAGE_X);
ASL.addMode(0x06, MODES.ZERO_PAGE);

module.exports = ASL;

/* nellie/mos6502/opcodes/ASL.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeASL(instruction, processor) {
  console.debug(this.name);
  const b = processor.register.b;
  // buffer[7] => carry flag
  processor.register.p.bitSet('C', b.bit(7));
  // shift left
  b.set(b.get() << 1);
  // negative flag check
  processor.register.p.bitSet('N', b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', b.test(0x0));
  return true;
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

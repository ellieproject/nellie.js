/* nellie/opcodes/ROL.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeROL(instruction, processor) {
  console.debug(this.name);
  const b = processor.register.b;
  // buffer[7] => newC
  const newC = b.bit(7);
  // shift left
  b.set(b.get() << 1);
  // carry flag => buffer[0]
  b.bitSet(0, processor.register.p.bit('C'));
  // newC => carry flag
  processor.register.p.bitSet('C', newC);
  // negative flag check
  processor.register.p.bitSet('N', b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', b.test(0x0));
  return true;
} // executeROL()

const ROL = new Ellie.Opcode(
  'ROL',
  'Rotate Left',
  executeROL
); // ROL

ROL.addAddressingMode(0x3E, MODES.ABSOLUTE_X);
ROL.addAddressingMode(0x2E, MODES.ABSOLUTE);
ROL.addAddressingMode(0x2A, MODES.ACCUMULATOR);
ROL.addAddressingMode(0x36, MODES.ZERO_PAGE_X);
ROL.addAddressingMode(0x26, MODES.ZERO_PAGE);

module.exports = ROL;

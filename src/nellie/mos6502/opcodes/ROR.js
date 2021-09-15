/* nellie/opcodes/ROR.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeROR(instruction, processor) {
  console.debug(this.name);
  const b = processor.register.b;
  // buffer[0] => newC
  const newC = b.bit(0);
  // shift right
  b.set(b.get() >> 1);
  // carry flag => buffer[7]
  b.bitSet(7, processor.register.p.bit('C'));
  // newC => carry flag
  processor.register.p.bitSet('C', newC);
  // negative flag check
  processor.register.p.bitSet('N', b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', b.test(0x0));
  return true;
} // executeROR()

const ROR = new Ellie.Opcode(
  'ROR',
  'Rotate Right',
  executeROR
); // ROR

ROR.addAddressingMode(0x7E, MODES.ABSOLUTE_X);
ROR.addAddressingMode(0x6E, MODES.ABSOLUTE);
ROR.addAddressingMode(0x6A, MODES.ACCUMULATOR);
ROR.addAddressingMode(0x76, MODES.ZERO_PAGE_X);
ROR.addAddressingMode(0x66, MODES.ZERO_PAGE);

module.exports = ROR;
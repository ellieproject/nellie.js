/* nellie/opcodes/ROR.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeROR(instruction, processor, result) {
  console.debug(this.name);
  // result[0] => newC
  const newC = result.bit(0);
  // shift right
  result.bits >>= 1;
  // carry flag => result[7]
  result.bitSet(7, processor.register.p.bit('C'));
  // newC => carry flag
  processor.register.p.bitSet('C', newC);
  // negative flag check
  processor.register.p.bitSet('N', result.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', result === 0x0);
  return result;
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

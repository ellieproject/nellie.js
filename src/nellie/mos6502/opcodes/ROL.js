/* nellie/opcodes/ROL.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeROL(instruction, processor, result) {
  console.debug(this.name);
  // result[7] => newC
  const newC = result.bit(7);
  // shift left
  result.bits <<= 1;
  // carry flag => result[0]
  result.bitSet(0, processor.register.p.bit('C'));
  // newC => carry flag
  processor.register.p.bitSet('C', newC);
  // negative flag check
  processor.register.p.bitSet('N', result.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', result.bits === 0x0);
  return result;
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

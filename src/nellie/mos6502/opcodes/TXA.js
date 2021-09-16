/* nellie/mos6502/opcodes/TXA.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeTXA(instruction, processor) {
  console.debug(this.name);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.x.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.x.test(0x0));
  // X => A
  processor.register.a.load(processor.register.x);
  return true;
} // executeTXA()

const TXA = new Ellie.Opcode(
  'TXA',
  'Transfer X to A',
  executeTXA
); // TXA

TXA.addAddressingMode(0x8A, MODES.IMPLIED);

module.exports = TXA;

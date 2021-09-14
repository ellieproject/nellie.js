/* nellie/opcodes/TXA.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTXA(instruction, processor) { // result unused
  console.debug(this.name);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.x.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.x.get() === 0x0);
  // X => A
  processor.register.a.set(processor.register.x.get());
  return null;
} // executeTXA()

const TXA = new Ellie.Opcode(
  'TXA',
  'Transfer X to A',
  executeTXA
); // TXA

TXA.addAddressingMode(0x8A, MODES.IMPLIED);

module.exports = TXA;

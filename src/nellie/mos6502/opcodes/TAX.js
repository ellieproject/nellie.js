/* nellie/opcodes/TAX.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTAX(instruction, processor) { // result unused
  console.debug(this.name);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.a.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.a.get() === 0x0);
  // A => X
  processor.register.x.set(processor.register.a.get());
  return null;
} // executeTAX()

const TAX = new Ellie.Opcode(
  'TAX',
  'Transfer A to X',
  executeTAX
); // TAX

TAX.addAddressingMode(0xAA, MODES.IMPLIED);

module.exports = TAX;

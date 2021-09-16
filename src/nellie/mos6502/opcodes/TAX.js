/* nellie/mos6502/opcodes/TAX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeTAX(instruction, processor) {
  console.debug(this.name);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.a.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.a.test(0x0));
  // A => X
  processor.register.x.load(processor.register.a);
  return true;
} // executeTAX()

const TAX = new Ellie.Opcode(
  'TAX',
  'Transfer A to X',
  executeTAX
); // TAX

TAX.addAddressingMode(0xAA, MODES.IMPLIED);

module.exports = TAX;

/* nellie/opcodes/TAY.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTAY(instruction, processor) { // result unused
  console.debug(this.name);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.a.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.a.get() === 0x0);
  // A => Y
  processor.register.y.set(processor.register.a.get());
  return null;
} // executeTAY()

const TAY = new Ellie.Opcode(
  'TAY',
  'Transfer A to Y',
  executeTAY
); // TAY

TAY.addAddressingMode(0xA8, MODES.IMPLIED);

module.exports = TAY;

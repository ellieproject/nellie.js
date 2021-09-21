/* nellie/mos6502/opcodes/TAY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeTAY(instruction, processor) {
  console.debug(this.name);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.a.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.a.test(0x0));
  // A => Y
  processor.register.y.load(processor.register.a);
  return true;
} // executeTAY()

const TAY = new Ellie.Processor.Operation(
  'TAY',
  'Transfer A to Y',
  executeTAY
); // TAY

TAY.addMode(0xA8, MODES.IMPLIED);

module.exports = TAY;

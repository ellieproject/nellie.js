/* nellie/mos6502/opcodes/DEY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeDEY(instruction, processor) {
  console.debug(this.name);
  // Y - 1 => Y // TODO calculate correctly
  processor.register.y.set(processor.register.y.get() - 1);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.y.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.y.test(0x0));
  return true;
} // executeDEY()

const DEY = new Ellie.Processor.Operation(
  'DEY',
  'Decrement Y',
  executeDEY
); // DEY

DEY.addMode(0x88, MODES.IMPLIED);

module.exports = DEY;

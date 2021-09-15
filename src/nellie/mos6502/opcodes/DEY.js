/* nellie/opcodes/DEY.js
 *
 */

const MODES = require('./modes.js');
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

const DEY = new Ellie.Opcode(
  'DEY',
  'Decrement Y',
  executeDEY
); // DEY

DEY.addAddressingMode(0x88, MODES.IMPLIED);

module.exports = DEY;
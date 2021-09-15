/* nellie/opcodes/INY.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeINY(instruction, processor) {
  console.debug(this.name);
  // Y + 1 => Y // TODO calculate correctly
  processor.register.y.set(processor.register.y.get() + 1);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.y.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.y.test(0x0));
  return true;
} // executeINY()

const INY = new Ellie.Opcode(
  'INY',
  'Increment Y',
  executeINY
); // INY

INY.addAddressingMode(0xC8, MODES.IMPLIED);

module.exports = INY;

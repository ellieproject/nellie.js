/* nellie/mos6502/operations/INY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
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

const INY = new Ellie.Processor.Operation(
  'INY',
  'Increment Y',
  executeINY
); // INY

INY.addMode(0xC8, MODES.IMPLIED);

module.exports = INY;

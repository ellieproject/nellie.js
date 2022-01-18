/* nellie/mos6502/operations/INY/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeINYTick(processor) {
  // Y + 1 => Y
  processor.register.y.inc();
  // negative flag check
  processor.register.p.bitSet('N', processor.register.y.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.y.test(0x00));
  return true;
} // executeINYTick()

const INY = new Ellie.Processor.Operation(
  'INY',
  'Increment Y',
  executeINYTick
); // INY

INY.addMode(0xC8, MODES.IMPLIED);

module.exports = INY;

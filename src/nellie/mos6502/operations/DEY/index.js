/* nellie/mos6502/operations/DEY/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeDEYTick(processor) {
  // Y - 1 => Y
  processor.register.y.dec();
  // negative flag check
  processor.register.p.bitSet('N', processor.register.y.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.y.test(0x00));
  return true;
} // executeDEYTick()

const DEY = new Ellie.Processor.Operation(
  'DEY',
  'Decrement Y',
  executeDEYTick
); // DEY

DEY.addMode(0x88, MODES.IMPLIED);

module.exports = DEY;

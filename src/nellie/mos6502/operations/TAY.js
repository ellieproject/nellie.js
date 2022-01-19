/* nellie/mos6502/operations/TAY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeTAYTick(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.a.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.a.test(0x00));
  // A => Y
  processor.register.y.load(processor.register.a);
  return true;
} // executeTAYTick()

const TAY = new Ellie.Processor.Operation(
  'TAY',
  'Transfer A to Y',
  executeTAYTick
); // TAY

TAY.addMode(0xA8, MODES.IMPLIED);

module.exports = TAY;

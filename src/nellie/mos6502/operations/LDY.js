/* nellie/mos6502/operations/LDY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeLDYTick(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.b.test(0x00));
  // B => Y
  processor.register.y.load(processor.register.b);
  return true;
} // executeLDYTick()

const LDY = new Ellie.Processor.Operation(
  'LDY',
  'Load Y from Memory',
  executeLDYTick
); // LDY

LDY.addMode(0xBC, MODES.ABSOLUTE_X);
LDY.addMode(0xAC, MODES.ABSOLUTE);
LDY.addMode(0xA0, MODES.IMMEDIATE);
LDY.addMode(0xB4, MODES.ZERO_PAGE_X);
LDY.addMode(0xA4, MODES.ZERO_PAGE);

module.exports = LDY;

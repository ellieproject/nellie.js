/* nellie/mos6502/operations/LDY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeLDY(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.b.test(0x0));
  // B => Y
  processor.register.y.load(processor.register.b);
  return true;
} // executeLDY()

const LDY = new Ellie.Processor.Operation(
  'LDY',
  'Load Y from Memory',
  executeLDY
); // LDY

LDY.addMode(0xBC, MODES.ABSOLUTE_Y);
LDY.addMode(0xAC, MODES.ABSOLUTE);
LDY.addMode(0xA0, MODES.IMMEDIATE);
LDY.addMode(0xB4, MODES.ZERO_PAGE_Y);
LDY.addMode(0xA4, MODES.ZERO_PAGE);

module.exports = LDY;

/* nellie/mos6502/operations/LDX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeLDXTick(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.b.test(0x00));
  // B => X
  processor.register.x.load(processor.register.b);
  return true;
} // executeLDXTick()

const LDX = new Ellie.Processor.Operation(
  'LDX',
  'Load X from Memory',
  executeLDXTick
); // LDX

LDX.addMode(0xBE, MODES.ABSOLUTE_Y);
LDX.addMode(0xAE, MODES.ABSOLUTE);
LDX.addMode(0xA2, MODES.IMMEDIATE);
LDX.addMode(0xB6, MODES.ZERO_PAGE_Y);
LDX.addMode(0xA6, MODES.ZERO_PAGE);

module.exports = LDX;

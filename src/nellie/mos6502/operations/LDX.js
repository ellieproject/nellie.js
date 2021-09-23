/* nellie/mos6502/operations/LDX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeLDX(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.b.test(0x0));
  // B => Y
  processor.register.x.load(processor.register.b);
  return true;
} // executeLDX()

const LDX = new Ellie.Processor.Operation(
  'LDX',
  'Load X from Memory',
  executeLDX
); // LDX

LDX.addMode(0xBE, MODES.ABSOLUTE_Y);
LDX.addMode(0xAE, MODES.ABSOLUTE);
LDX.addMode(0xA2, MODES.IMMEDIATE);
LDX.addMode(0xB6, MODES.ZERO_PAGE_Y);
LDX.addMode(0xA6, MODES.ZERO_PAGE);

module.exports = LDX;

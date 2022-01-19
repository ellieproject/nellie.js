/* nellie/mos6502/operations/BIT.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeBITTick(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.b.bit(7));
  // negative flag check
  processor.register.p.bitSet('V', processor.register.b.bit(6));
  // A & B => B
  processor.register.b.and(processor.register.a);
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.b.test(0x00));
  return true;
} // executeBITTick()

const BIT = new Ellie.Processor.Operation(
  'BIT',
  'Test Bits in Memory Against A',
  executeBITTick
); // BIT

BIT.addMode(0x2C, MODES.ABSOLUTE);
BIT.addMode(0x24, MODES.ZERO_PAGE);

module.exports = BIT;

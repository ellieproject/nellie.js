/* nellie/mos6502/operations/DEC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeDEC(processor) {
  // B - 1 => B
  processor.register.b.dec();
  // negative flag check
  processor.register.p.bitSet('N', processor.register.b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.b.test(0x00));
  return true;
} // executeDEC()

const DEC = new Ellie.Processor.Operation(
  'DEC',
  'Decrement Memory',
  executeDEC
); // DEC

DEC.addMode(0xDE, MODES.ABSOLUTE_X);
DEC.addMode(0xCE, MODES.ABSOLUTE);
DEC.addMode(0xD6, MODES.ZERO_PAGE_X);
DEC.addMode(0xC6, MODES.ZERO_PAGE);

module.exports = DEC;

/* nellie/mos6502/operations/TAX/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeTAX(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.a.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.a.test(0x00));
  // A => X
  processor.register.x.load(processor.register.a);
  return true;
} // executeTAX()

const TAX = new Ellie.Processor.Operation(
  'TAX',
  'Transfer A to X',
  executeTAX
); // TAX

TAX.addMode(0xAA, MODES.IMPLIED);

module.exports = TAX;

/* nellie/mos6502/operations/TXA/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeTXATick(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.x.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.x.test(0x00));
  // X => A
  processor.register.a.load(processor.register.x);
  return true;
} // executeTXATick()

const TXA = new Ellie.Processor.Operation(
  'TXA',
  'Transfer X to A',
  executeTXATick
); // TXA

TXA.addMode(0x8A, MODES.IMPLIED);

module.exports = TXA;

/* nellie/mos6502/operations/TXA.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeTXA(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.x.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.x.test(0x0));
  // X => A
  processor.register.a.load(processor.register.x);
  return true;
} // executeTXA()

const TXA = new Ellie.Processor.Operation(
  'TXA',
  'Transfer X to A',
  executeTXA
); // TXA

TXA.addMode(0x8A, MODES.IMPLIED);

module.exports = TXA;

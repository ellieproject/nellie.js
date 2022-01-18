/* nellie/mos6502/operations/TYA/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeTYATick(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.y.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.y.test(0x00));
  // Y => A
  processor.register.a.load(processor.register.y);
  processor.clock.tick(2);
  return true;
} // executeTYATick()

const TYA = new Ellie.Processor.Operation(
  'TYA',
  'Transfer Y to A',
  executeTYATick
); // TYA

TYA.addMode(0x98, MODES.IMPLIED);

module.exports = TYA;

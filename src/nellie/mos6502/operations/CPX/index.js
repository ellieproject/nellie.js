/* nellie/mos6502/operations/CPX/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeCPXTick(processor) {
  const sub = (processor.register.x.bits - processor.register.b.bits);
  const n   = (sub & 0x80) >> 7;
  processor.register.p.bitSet('N', n);
  if (processor.register.x.bits > processor.register.b.bits) {
    processor.register.p.bitSet('Z', 0);
    processor.register.p.bitSet('C', 1);
  } else if (processor.register.x.bits === processor.register.b.bits) {
    processor.register.p.bitSet('Z', 1);
    processor.register.p.bitSet('C', 1);
  } else { // <
    processor.register.p.bitSet('Z', 0);
    processor.register.p.bitSet('C', 0);
  }
  return true;
} // executeCPXTick()

const CPX = new Ellie.Processor.Operation(
  'CPX',
  'Compare Memory with X',
  executeCPXTick
); // CPX

CPX.addMode(0xEC, MODES.ABSOLUTE);
CPX.addMode(0xE0, MODES.IMMEDIATE);
CPX.addMode(0xE4, MODES.ZERO_PAGE);

module.exports = CPX;

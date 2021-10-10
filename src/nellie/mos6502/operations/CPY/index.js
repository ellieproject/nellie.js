/* nellie/mos6502/operations/CPY/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCPY(processor) {
  const sub = (processor.register.y.bits - processor.register.b.bits);
  const n   = (sub & 0x80) >> 7;
  processor.register.p.bitSet('N', n);
  if (processor.register.y.bits > processor.register.b.bits) {
    processor.register.p.bitSet('Z', 0);
    processor.register.p.bitSet('C', 1);
  } else if (processor.register.y.bits === processor.register.b.bits) {
    processor.register.p.bitSet('Z', 1);
    processor.register.p.bitSet('C', 1);
  } else { // <
    processor.register.p.bitSet('Z', 0);
    processor.register.p.bitSet('C', 0);
  }
  return true;
} // executeCPY()

const CPY = new Ellie.Processor.Operation(
  'CPY',
  'Compare Memory with Y',
  executeCPY
); // CPY

CPY.addMode(0xCC, MODES.ABSOLUTE);
CPY.addMode(0xC0, MODES.IMMEDIATE);
CPY.addMode(0xC4, MODES.ZERO_PAGE);

module.exports = CPY;

/* nellie/mos6502/operations/ROL/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeROLTick(processor) {
  const b = processor.register.b;
  // buffer[7] => newC
  const newC = b.bit(7);
  // shift left
  b.set(b.get() << 1);
  // carry flag => buffer[0]
  b.bitSet(0, processor.register.p.bit('C'));
  // newC => carry flag
  processor.register.p.bitSet('C', newC);
  // negative flag check
  processor.register.p.bitSet('N', b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', b.test(0x00));
  return true;
} // executeROLTick()

const ROL = new Ellie.Processor.Operation(
  'ROL',
  'Rotate Left',
  executeROLTick
); // ROL

ROL.addMode(0x3E, MODES.ABSOLUTE_X);
ROL.addMode(0x2E, MODES.ABSOLUTE);
ROL.addMode(0x2A, MODES.ACCUMULATOR);
ROL.addMode(0x36, MODES.ZERO_PAGE_X);
ROL.addMode(0x26, MODES.ZERO_PAGE);

module.exports = ROL;

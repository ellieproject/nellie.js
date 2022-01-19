/* nellie/mos6502/operations/AND.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeANDTick(processor) {
  // A & B => A
  processor.register.a.and(processor.register.b);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.a.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.a.test(0x00));
  return true;
} // executeANDTick()

const AND = new Ellie.Processor.Operation(
  'AND',
  '"AND" Memory with A',
  executeANDTick
); // AND

AND.addMode(0x3D, MODES.ABSOLUTE_X);
AND.addMode(0x39, MODES.ABSOLUTE_Y);
AND.addMode(0x2D, MODES.ABSOLUTE);
AND.addMode(0x29, MODES.IMMEDIATE);
AND.addMode(0x21, MODES.INDIRECT_X);
AND.addMode(0x31, MODES.INDIRECT_Y);
AND.addMode(0x35, MODES.ZERO_PAGE_X);
AND.addMode(0x25, MODES.ZERO_PAGE);

module.exports = AND;

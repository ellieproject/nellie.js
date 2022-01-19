/* nellie/mos6502/operations/INX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeINXTick(processor) {
  // X + 1 => X
  processor.register.x.inc();
  // negative flag check
  processor.register.p.bitSet('N', processor.register.x.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.x.test(0x00));
  return true;
} // executeINXTick()

const INX = new Ellie.Processor.Operation(
  'INX',
  'Increment X',
  executeINXTick
); // INX

INX.addMode(0xE8, MODES.IMPLIED);

module.exports = INX;

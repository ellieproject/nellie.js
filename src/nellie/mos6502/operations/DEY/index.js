/* nellie/mos6502/operations/DEY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeDEY(processor) {
  // Y - 1 => Y
  processor.register.y.dec();
  // negative flag check
  processor.register.p.bitSet('N', processor.register.y.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.y.test(0x00));
  return true;
} // executeDEY()

const DEY = new Ellie.Processor.Operation(
  'DEY',
  'Decrement Y',
  executeDEY
); // DEY

DEY.addMode(0x88, MODES.IMPLIED);

module.exports = DEY;

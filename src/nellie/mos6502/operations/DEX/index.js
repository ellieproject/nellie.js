/* nellie/mos6502/operations/DEX/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeDEX(processor) {
  // X - 1 => X
  processor.register.x.dec();
  // negative flag check
  processor.register.p.bitSet('N', processor.register.x.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.x.test(0x00));
  return true;
} // executeDEX()

const DEX = new Ellie.Processor.Operation(
  'DEX',
  'Decrement X',
  executeDEX
); // DEX

DEX.addMode(0xCA, MODES.IMPLIED);

module.exports = DEX;

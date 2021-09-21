/* nellie/mos6502/opcodes/INX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeINX(instruction, processor) {
  console.debug(this.name);
  // X + 1 => X // TODO calculate correctly
  processor.register.x.set(processor.register.x.get() + 1);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.x.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.x.test(0x0));
  return true;
} // executeINX()

const INX = new Ellie.Processor.Operation(
  'INX',
  'Increment X',
  executeINX
); // INX

INX.addMode(0xE8, MODES.IMPLIED);

module.exports = INX;

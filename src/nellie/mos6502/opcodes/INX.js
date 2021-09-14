/* nellie/opcodes/INX.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeINX(instruction, processor) { // result unused
  console.debug(this.name);
  // X + 1 => X
  processor.register.x.set(processor.register.x.get() + 1);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.x.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.x.get() === 0x0);
  return null;
} // executeINX()

const INX = new Ellie.Opcode(
  'INX',
  'Increment X',
  executeINX
); // INX

INX.addAddressingMode(0xE8, MODES.IMPLIED);

module.exports = INX;

/* nellie/opcodes/TYA.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTYA(instruction, processor) {
  console.debug(this.name);
  // negative flag check
  processor.register.p.bitSet('N', processor.register.y.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.y.test(0x0));
  // Y => A
  processor.register.a.load(processor.register.y);
  return true;
} // executeTYA()

const TYA = new Ellie.Opcode(
  'TYA',
  'Transfer Y to A',
  executeTYA
); // TYA

TYA.addAddressingMode(0x98, MODES.IMPLIED);

module.exports = TYA;

/* nellie/opcodes/TYA.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTYA(instruction, processor) {
  console.log(this);
  return;
} // executeTYA()

const TYA = new Ellie.Opcode(
  'TYA',
  'Transfer Y to A',
  executeTYA
); // TYA

TYA.addAddressingMode(0x98, MODES.IMPLIED);

module.exports = TYA;

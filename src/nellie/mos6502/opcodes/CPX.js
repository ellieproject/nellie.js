/* nellie/opcodes/CPX.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeCPX(instruction, processor) {
  console.log(this);
  return;
} // executeCPX()

const CPX = new Ellie.Opcode(
  'CPX',
  'Compare Memory with X',
  executeCPX
); // CPX

CPX.addAddressingMode(0xEC, MODES.ABSOLUTE);
CPX.addAddressingMode(0xE0, MODES.IMMEDIATE);
CPX.addAddressingMode(0xE4, MODES.ZERO_PAGE);

module.exports = CPX;

/* nellie/opcodes/JMP.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeJMP(instruction, processor) {
  console.log(this);
  return;
} // executeJMP()

const JMP = new Ellie.Opcode(
  'JMP',
  'Jump',
  executeJMP
); // JMP

JMP.addAddressingMode(0x4C, MODES.ABSOLUTE);
JMP.addAddressingMode(0x6C, MODES.INDIRECT);

module.exports = JMP;

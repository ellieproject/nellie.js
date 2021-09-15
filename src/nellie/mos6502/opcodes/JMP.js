/* nellie/opcodes/JMP.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeJMP(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeJMP()

const JMP = new Ellie.Opcode(
  'JMP',
  'Jump',
  executeJMP
); // JMP

JMP.addAddressingMode(0x4C, MODES.ABSOLUTE);
JMP.addAddressingMode(0x6C, MODES.INDIRECT);

module.exports = JMP;

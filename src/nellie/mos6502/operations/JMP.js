/* nellie/mos6502/opcodes/JMP.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeJMP(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeJMP()

const JMP = new Ellie.Processor.Operation(
  'JMP',
  'Jump',
  executeJMP
); // JMP

JMP.addMode(0x4C, MODES.ABSOLUTE);
JMP.addMode(0x6C, MODES.INDIRECT);

module.exports = JMP;

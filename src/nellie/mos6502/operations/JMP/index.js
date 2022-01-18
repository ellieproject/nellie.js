/* nellie/mos6502/operations/JMP/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeJMPTick(processor) {
  console.debug(this.name);
  return false;
} // executeJMPTick()

const JMP = new Ellie.Processor.Operation(
  'JMP',
  'Jump',
  executeJMPTick
); // JMP

JMP.addMode(0x4C, MODES.ABSOLUTE);
JMP.addMode(0x6C, MODES.INDIRECT);

module.exports = JMP;

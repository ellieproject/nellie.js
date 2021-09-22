/* nellie/mos6502/opcodes/CPX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCPX(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeCPX()

const CPX = new Ellie.Processor.Operation(
  'CPX',
  'Compare Memory with X',
  executeCPX
); // CPX

CPX.addMode(0xEC, MODES.ABSOLUTE);
CPX.addMode(0xE0, MODES.IMMEDIATE);
CPX.addMode(0xE4, MODES.ZERO_PAGE);

module.exports = CPX;

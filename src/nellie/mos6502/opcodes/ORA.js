/* nellie/mos6502/opcodes/ORA.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeORA(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeORA()

const ORA = new Ellie.Opcode(
  'ORA',
  '"OR" Memory to A',
  executeORA
); // ORA

ORA.addAddressingMode(0x1D, MODES.ABSOLUTE_X);
ORA.addAddressingMode(0x19, MODES.ABSOLUTE_Y);
ORA.addAddressingMode(0x0D, MODES.ABSOLUTE);
ORA.addAddressingMode(0x09, MODES.IMMEDIATE);
ORA.addAddressingMode(0x01, MODES.INDIRECT_X);
ORA.addAddressingMode(0x11, MODES.INDIRECT_Y);
ORA.addAddressingMode(0x15, MODES.ZERO_PAGE_X);
ORA.addAddressingMode(0x05, MODES.ZERO_PAGE);

module.exports = ORA;

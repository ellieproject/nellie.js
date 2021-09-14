/* nellie/opcodes/SBC.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeSBC(instruction, processor) {
  console.log(this);
  return;
} // executeSBC()

const SBC = new Ellie.Opcode(
  'SBC',
  'Subtract with Carry',
  executeSBC
); // SBC

SBC.addAddressingMode(0xFD, MODES.ABSOLUTE_X);
SBC.addAddressingMode(0xF9, MODES.ABSOLUTE_Y);
SBC.addAddressingMode(0xED, MODES.ABSOLUTE);
SBC.addAddressingMode(0xE9, MODES.IMMEDIATE);
SBC.addAddressingMode(0xE1, MODES.INDIRECT_X);
SBC.addAddressingMode(0xF1, MODES.INDIRECT_Y);
SBC.addAddressingMode(0xF5, MODES.ZERO_PAGE_X);
SBC.addAddressingMode(0xE5, MODES.ZERO_PAGE);

module.exports = SBC;

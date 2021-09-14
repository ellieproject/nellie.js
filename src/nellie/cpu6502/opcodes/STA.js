/* nellie/opcodes/STA.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeSTA(instruction, processor) {
  console.log(this);
  return;
} // executeSTA()

const STA = new Ellie.Opcode(
  'STA',
  'Store A to Memory',
  executeSTA
); // STA

STA.addAddressingMode(0x9D, MODES.ABSOLUTE_X);
STA.addAddressingMode(0x99, MODES.ABSOLUTE_Y);
STA.addAddressingMode(0x8D, MODES.ABSOLUTE);
STA.addAddressingMode(0x81, MODES.INDIRECT_X);
STA.addAddressingMode(0x91, MODES.INDIRECT_Y);
STA.addAddressingMode(0x95, MODES.ZERO_PAGE_X);
STA.addAddressingMode(0x85, MODES.ZERO_PAGE);

module.exports = STA;

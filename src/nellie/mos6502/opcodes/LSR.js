/* nellie/opcodes/LSR.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeLSR(instruction, processor) {
  console.debug(this.name);
  return;
} // executeLSR()

const LSR = new Ellie.Opcode(
  'LSR',
  'Shift Right One Bit',
  executeLSR
); // LSR

LSR.addAddressingMode(0x5E, MODES.ABSOLUTE_X);
LSR.addAddressingMode(0x4E, MODES.ABSOLUTE);
LSR.addAddressingMode(0x4A, MODES.ACCUMULATOR);
LSR.addAddressingMode(0x56, MODES.ZERO_PAGE_X);
LSR.addAddressingMode(0x46, MODES.ZERO_PAGE);

module.exports = LSR;

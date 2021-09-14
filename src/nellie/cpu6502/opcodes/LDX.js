/* nellie/opcodes/LDX.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeLDX(instruction, processor) {
  console.log(this);
  return;
} // executeLDX()

const LDX = new Ellie.Opcode(
  'LDX',
  'Load X from Memory',
  executeLDX
); // LDX

LDX.addAddressingMode(0xBE, MODES.ABSOLUTE_Y);
LDX.addAddressingMode(0xAE, MODES.ABSOLUTE);
LDX.addAddressingMode(0xA2, MODES.IMMEDIATE);
LDX.addAddressingMode(0xB6, MODES.ZERO_PAGE_Y);
LDX.addAddressingMode(0xA6, MODES.ZERO_PAGE);

module.exports = LDX;

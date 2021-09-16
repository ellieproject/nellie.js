/* nellie/mos6502/opcodes/TSX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeTSX(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeTSX()

const TSX = new Ellie.Opcode(
  'TSX',
  'Transfer Stack Pointer to X',
  executeTSX
); // TSX

TSX.addAddressingMode(0xBA, MODES.IMPLIED);

module.exports = TSX;

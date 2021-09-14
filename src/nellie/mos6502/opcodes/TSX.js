/* nellie/opcodes/TSX.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTSX(instruction, processor) {
  console.debug(this.name);
  return;
} // executeTSX()

const TSX = new Ellie.Opcode(
  'TSX',
  'Transfer Stack Pointer to X',
  executeTSX
); // TSX

TSX.addAddressingMode(0xBA, MODES.IMPLIED);

module.exports = TSX;

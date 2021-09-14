/* nellie/opcodes/NOP.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeNOP(instruction, processor) {
  console.log(this);
  return;
} // executeNOP()

const NOP = new Ellie.Opcode(
  'NOP',
  'No Operation',
  executeNOP
); // NOP

NOP.addAddressingMode(0xEA, MODES.IMPLIED);

module.exports = NOP;

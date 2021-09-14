/* nellie/opcodes/TAY.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTAY(instruction, processor) {
  console.log(this);
  return;
} // executeTAY()

const TAY = new Ellie.Opcode(
  'TAY',
  'Transfer A to Y',
  executeTAY
); // TAY

TAY.addAddressingMode(0xA8, MODES.IMPLIED);

module.exports = TAY;

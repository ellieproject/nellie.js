/* nellie/opcodes/CLC.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeCLC(instruction, processor) {
  console.log(this);
  return;
} // executeCLC()

const CLC = new Ellie.Opcode(
  'CLC',
  'Clear Carry Flag',
  executeCLC
); // CLC

CLC.addAddressingMode(0x18, MODES.IMPLIED);

module.exports = CLC;

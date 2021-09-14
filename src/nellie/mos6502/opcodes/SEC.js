/* nellie/opcodes/SEC.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeSEC(instruction, processor) {
  console.log(this);
  return;
} // executeSEC()

const SEC = new Ellie.Opcode(
  'SEC',
  'Set Carry Flag',
  executeSEC
); // SEC

SEC.addAddressingMode(0x38, MODES.IMPLIED);

module.exports = SEC;

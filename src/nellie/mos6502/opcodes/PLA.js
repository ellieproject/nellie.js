/* nellie/opcodes/PLA.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executePLA(instruction, processor) {
  console.debug(this.name);
  return false;
} // executePLA()

const PLA = new Ellie.Opcode(
  'PLA',
  'Pull A from Stack',
  executePLA
); // PLA

PLA.addAddressingMode(0x68, MODES.IMPLIED);

module.exports = PLA;

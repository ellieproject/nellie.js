/* nellie/opcodes/PHA.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executePHA(instruction, processor) {
  console.debug(this.name);
  return;
} // executePHA()

const PHA = new Ellie.Opcode(
  'PHA',
  'Push A on Stack',
  executePHA
); // PHA

PHA.addAddressingMode(0x48, MODES.IMPLIED);

module.exports = PHA;

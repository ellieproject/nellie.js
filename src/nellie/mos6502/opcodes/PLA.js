/* nellie/mos6502/opcodes/PLA.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
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

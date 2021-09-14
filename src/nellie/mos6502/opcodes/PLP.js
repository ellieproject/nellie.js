/* nellie/opcodes/PLP.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executePLP(instruction, processor) {
  console.debug(this.name);
  return;
} // executePLP()

const PLP = new Ellie.Opcode(
  'PLP',
  'Pull Processor Status from Stack',
  executePLP
); // PLP

PLP.addAddressingMode(0x28, MODES.IMPLIED);

module.exports = PLP;

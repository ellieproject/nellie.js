/* nellie/opcodes/ROR.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeROR(instruction, processor) {
  console.debug(this.name);
  return;
} // executeROR()

const ROR = new Ellie.Opcode(
  'ROR',
  'Rotate Right',
  executeROR
); // ROR

ROR.addAddressingMode(0x7E, MODES.ABSOLUTE_X);
ROR.addAddressingMode(0x6E, MODES.ABSOLUTE);
ROR.addAddressingMode(0x6A, MODES.ACCUMULATOR);
ROR.addAddressingMode(0x76, MODES.ZERO_PAGE_X);
ROR.addAddressingMode(0x66, MODES.ZERO_PAGE);

module.exports = ROR;

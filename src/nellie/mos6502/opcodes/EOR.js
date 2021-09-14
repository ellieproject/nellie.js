/* nellie/opcodes/EOR.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeEOR(instruction, processor) {
  console.log(this);
  return;
} // executeEOR()

const EOR = new Ellie.Opcode(
  'EOR',
  'Exclusive "OR"',
  executeEOR
); // EOR

EOR.addAddressingMode(0x5D, MODES.ABSOLUTE_X);
EOR.addAddressingMode(0x59, MODES.ABSOLUTE_Y);
EOR.addAddressingMode(0x4D, MODES.ABSOLUTE);
EOR.addAddressingMode(0x49, MODES.IMMEDIATE);
EOR.addAddressingMode(0x41, MODES.INDIRECT_X);
EOR.addAddressingMode(0x51, MODES.INDIRECT_Y);
EOR.addAddressingMode(0x55, MODES.ZERO_PAGE_X);
EOR.addAddressingMode(0x45, MODES.ZERO_PAGE);

module.exports = EOR;

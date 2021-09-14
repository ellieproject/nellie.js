/* nellie/opcodes/ROL.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeROL(instruction, processor) {
  console.debug(this.name);
  return;
} // executeROL()

const ROL = new Ellie.Opcode(
  'ROL',
  'Rotate Left',
  executeROL
); // ROL

ROL.addAddressingMode(0x3E, MODES.ABSOLUTE_X);
ROL.addAddressingMode(0x2E, MODES.ABSOLUTE);
ROL.addAddressingMode(0x2A, MODES.ACCUMULATOR);
ROL.addAddressingMode(0x36, MODES.ZERO_PAGE_X);
ROL.addAddressingMode(0x26, MODES.ZERO_PAGE);

module.exports = ROL;

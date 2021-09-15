/* nellie/opcodes/DEC.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeDEC(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeDEC()

const DEC = new Ellie.Opcode(
  'DEC',
  'Decrement Memory',
  executeDEC
); // DEC

DEC.addAddressingMode(0xDE, MODES.ABSOLUTE_X);
DEC.addAddressingMode(0xCE, MODES.ABSOLUTE);
DEC.addAddressingMode(0xD6, MODES.ZERO_PAGE_X);
DEC.addAddressingMode(0xC6, MODES.ZERO_PAGE);

module.exports = DEC;

/* nellie/mos6502/opcodes/INC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeINC(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeINC()

const INC = new Ellie.Opcode(
  'INC',
  'Increment Memory',
  executeINC
); // INC

INC.addAddressingMode(0xFE, MODES.ABSOLUTE_X);
INC.addAddressingMode(0xEE, MODES.ABSOLUTE);
INC.addAddressingMode(0xF6, MODES.ZERO_PAGE_X);
INC.addAddressingMode(0xE6, MODES.ZERO_PAGE);

module.exports = INC;

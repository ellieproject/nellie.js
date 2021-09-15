/* nellie/opcodes/AND.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeAND(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeAND()

const AND = new Ellie.Opcode(
  'AND',
  '"AND" Memory with A',
  executeAND
); // AND

AND.addAddressingMode(0x3D, MODES.ABSOLUTE_X);
AND.addAddressingMode(0x39, MODES.ABSOLUTE_Y);
AND.addAddressingMode(0x2D, MODES.ABSOLUTE);
AND.addAddressingMode(0x29, MODES.IMMEDIATE);
AND.addAddressingMode(0x21, MODES.INDIRECT_X);
AND.addAddressingMode(0x31, MODES.INDIRECT_Y);
AND.addAddressingMode(0x35, MODES.ZERO_PAGE_X);
AND.addAddressingMode(0x25, MODES.ZERO_PAGE);

module.exports = AND;

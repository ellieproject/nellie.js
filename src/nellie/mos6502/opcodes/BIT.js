/* nellie/opcodes/BIT.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBIT(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBIT()

const BIT = new Ellie.Opcode(
  'BIT',
  'Test Bits in Memory Against A',
  executeBIT
); // BIT

BIT.addAddressingMode(0x2C, MODES.ABSOLUTE);
BIT.addAddressingMode(0x24, MODES.ZERO_PAGE);

module.exports = BIT;

/* nellie/mos6502/operations/BIT.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBIT(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBIT()

const BIT = new Ellie.Processor.Operation(
  'BIT',
  'Test Bits in Memory Against A',
  executeBIT
); // BIT

BIT.addMode(0x2C, MODES.ABSOLUTE);
BIT.addMode(0x24, MODES.ZERO_PAGE);

module.exports = BIT;

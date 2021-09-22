/* nellie/mos6502/opcodes/DEC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeDEC(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeDEC()

const DEC = new Ellie.Processor.Operation(
  'DEC',
  'Decrement Memory',
  executeDEC
); // DEC

DEC.addMode(0xDE, MODES.ABSOLUTE_X);
DEC.addMode(0xCE, MODES.ABSOLUTE);
DEC.addMode(0xD6, MODES.ZERO_PAGE_X);
DEC.addMode(0xC6, MODES.ZERO_PAGE);

module.exports = DEC;

/* nellie/mos6502/operations/NOP.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeNOP() { // instruction, processor unused
  console.debug(this.name);
  return true;
} // executeNOP()

const NOP = new Ellie.Processor.Operation(
  'NOP',
  'No Operation',
  executeNOP
); // NOP

NOP.addMode(0xEA, MODES.IMPLIED);

module.exports = NOP;

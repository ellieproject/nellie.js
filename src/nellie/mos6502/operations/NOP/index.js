/* nellie/mos6502/operations/NOP/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeNOP() { // processor unused
  return true;
} // executeNOP()

const NOP = new Ellie.Processor.Operation(
  'NOP',
  'No Operation',
  executeNOP
); // NOP

NOP.addMode(0xEA, MODES.IMPLIED);

module.exports = NOP;

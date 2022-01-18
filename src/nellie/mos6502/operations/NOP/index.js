/* nellie/mos6502/operations/NOP/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeNOPTick() { // processor unused
  return true;
} // executeNOPTick()

const NOP = new Ellie.Processor.Operation(
  'NOP',
  'No Operation',
  executeNOPTick
); // NOP

NOP.addMode(0xEA, MODES.IMPLIED);

module.exports = NOP;

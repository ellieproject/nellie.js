/* nellie/mos6502/opcodes/BPL.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBPL(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBPL()

const BPL = new Ellie.Processor.Operation(
  'BPL',
  'Branch on Result Plus',
  executeBPL
); // BPL

BPL.addMode(0x10, MODES.IMPLIED);

module.exports = BPL;

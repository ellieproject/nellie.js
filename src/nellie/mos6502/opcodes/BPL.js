/* nellie/opcodes/BPL.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBPL(instruction, processor) {
  console.log(this);
  return;
} // executeBPL()

const BPL = new Ellie.Opcode(
  'BPL',
  'Branch on Result Plus',
  executeBPL
); // BPL

BPL.addAddressingMode(0x10, MODES.IMPLIED);

module.exports = BPL;

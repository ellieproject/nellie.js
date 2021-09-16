/* nellie/mos6502/opcodes/BEQ.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBEQ(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBEQ()

const BEQ = new Ellie.Opcode(
  'BEQ',
  'Branch on Result Zero',
  executeBEQ
); // BEQ

BEQ.addAddressingMode(0xF0, MODES.IMPLIED);

module.exports = BEQ;

/* nellie/opcodes/BEQ.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBEQ(instruction, processor) {
  console.log(this);
  return;
} // executeBEQ()

const BEQ = new Ellie.Opcode(
  'BEQ',
  'Branch on Result Zero',
  executeBEQ
); // BEQ

BEQ.addAddressingMode(0xF0, MODES.IMPLIED);

module.exports = BEQ;

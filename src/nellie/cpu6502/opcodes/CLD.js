/* nellie/opcodes/CLD.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeCLD(instruction, processor) {
  console.log(this);
  return;
} // executeCLD()

const CLD = new Ellie.Opcode(
  'CLD',
  'Clear Decimal Mode',
  executeCLD
); // CLD

CLD.addAddressingMode(0xD8, MODES.IMPLIED);

module.exports = CLD;

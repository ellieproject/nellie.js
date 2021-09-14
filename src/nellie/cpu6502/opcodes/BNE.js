/* nellie/opcodes/BNE.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBNE(instruction, processor) {
  console.log(this);
  return;
} // executeBNE()

const BNE = new Ellie.Opcode(
  'BNE',
  'Branch on Result not Zero',
  executeBNE
); // BNE

BNE.addAddressingMode(0xD0, MODES.IMPLIED);

module.exports = BNE;

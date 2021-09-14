/* nellie/opcodes/BCC.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBCC(instruction, processor) {
  console.debug(this.name);
  return;
} // executeBCC()

const BCC = new Ellie.Opcode(
  'BCC',
  'Branch on Carry Clear',
  executeBCC
); // BCC

BCC.addAddressingMode(0x90, MODES.IMPLIED);

module.exports = BCC;

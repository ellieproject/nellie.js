/* nellie/opcodes/BCS.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBCS(instruction, processor) {
  console.log(this);
  return;
} // executeBCS()

const BCS = new Ellie.Opcode(
  'BCS',
  'Branch on Carry Set',
  executeBCS
); // BCS

BCS.addAddressingMode(0xB0, MODES.IMPLIED);

module.exports = BCS;

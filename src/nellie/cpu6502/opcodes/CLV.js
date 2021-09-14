/* nellie/opcodes/CLV.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeCLV(instruction, processor) {
  console.log(this);
  return;
} // executeCLV()

const CLV = new Ellie.Opcode(
  'CLV',
  'Clear Overflow Flag',
  executeCLV
); // CLV

CLV.addAddressingMode(0xB8, MODES.IMPLIED);

module.exports = CLV;

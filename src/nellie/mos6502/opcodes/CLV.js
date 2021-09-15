/* nellie/opcodes/CLV.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeCLV(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('V', 0);
  return true;
} // executeCLV()

const CLV = new Ellie.Opcode(
  'CLV',
  'Clear Overflow Flag',
  executeCLV
); // CLV

CLV.addAddressingMode(0xB8, MODES.IMPLIED);

module.exports = CLV;

/* nellie/opcodes/SEI.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeSEI(instruction, processor) {
  console.log(this);
  return;
} // executeSEI()

const SEI = new Ellie.Opcode(
  'SEI',
  'Set Interrupt Disable Status',
  executeSEI
); // SEI

SEI.addAddressingMode(0x78, MODES.IMPLIED);

module.exports = SEI;

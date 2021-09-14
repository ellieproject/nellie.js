/* nellie/opcodes/SEI.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeSEI(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('I', 1);
  return;
} // executeSEI()

const SEI = new Ellie.Opcode(
  'SEI',
  'Set Interrupt Disable Status',
  executeSEI
); // SEI

SEI.addAddressingMode(0x78, MODES.IMPLIED);

module.exports = SEI;

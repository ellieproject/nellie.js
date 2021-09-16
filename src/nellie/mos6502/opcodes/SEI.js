/* nellie/mos6502/opcodes/SEI.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeSEI(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('I', 1);
  return true;
} // executeSEI()

const SEI = new Ellie.Opcode(
  'SEI',
  'Set Interrupt Disable Status',
  executeSEI
); // SEI

SEI.addAddressingMode(0x78, MODES.IMPLIED);

module.exports = SEI;

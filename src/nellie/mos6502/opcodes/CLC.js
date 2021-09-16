/* nellie/mos6502/opcodes/CLC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCLC(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('C', 0);
  return true;
} // executeCLC()

const CLC = new Ellie.Opcode(
  'CLC',
  'Clear Carry Flag',
  executeCLC
); // CLC

CLC.addAddressingMode(0x18, MODES.IMPLIED);

module.exports = CLC;

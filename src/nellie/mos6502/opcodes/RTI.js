/* nellie/mos6502/opcodes/RTI.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeRTI(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeRTI()

const RTI = new Ellie.Opcode(
  'RTI',
  'Return from Interrupt',
  executeRTI
); // RTI

RTI.addAddressingMode(0x40, MODES.IMPLIED);

module.exports = RTI;

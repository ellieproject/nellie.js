/* nellie/mos6502/opcodes/RTS.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeRTS(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeRTS()

const RTS = new Ellie.Opcode(
  'RTS',
  'Return from Subroutine',
  executeRTS
); // RTS

RTS.addAddressingMode(0x60, MODES.IMPLIED);

module.exports = RTS;

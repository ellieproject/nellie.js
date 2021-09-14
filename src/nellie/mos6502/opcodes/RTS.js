/* nellie/opcodes/RTS.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeRTS(instruction, processor) {
  console.log(this);
  return;
} // executeRTS()

const RTS = new Ellie.Opcode(
  'RTS',
  'Return from Subroutine',
  executeRTS
); // RTS

RTS.addAddressingMode(0x60, MODES.IMPLIED);

module.exports = RTS;

/* nellie/opcodes/RTI.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeRTI(instruction, processor) {
  console.debug(this.name);
  return;
} // executeRTI()

const RTI = new Ellie.Opcode(
  'RTI',
  'Return from Interrupt',
  executeRTI
); // RTI

RTI.addAddressingMode(0x40, MODES.IMPLIED);

module.exports = RTI;

/* nellie/mos6502/operations/RTI.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeRTI(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeRTI()

const RTI = new Ellie.Processor.Operation(
  'RTI',
  'Return from Interrupt',
  executeRTI
); // RTI

RTI.addMode(0x40, MODES.IMPLIED);

module.exports = RTI;

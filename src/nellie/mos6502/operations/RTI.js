/* nellie/mos6502/operations/RTI.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeRTITick(processor) {
  console.debug(this.name);
  return false;
} // executeRTITick()

const RTI = new Ellie.Processor.Operation(
  'RTI',
  'Return from Interrupt',
  executeRTITick
); // RTI

RTI.addMode(0x40, MODES.IMPLIED);

module.exports = RTI;

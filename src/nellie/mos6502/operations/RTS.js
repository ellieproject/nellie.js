/* nellie/mos6502/operations/RTS.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeRTS(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeRTS()

const RTS = new Ellie.Processor.Operation(
  'RTS',
  'Return from Subroutine',
  executeRTS
); // RTS

RTS.addMode(0x60, MODES.IMPLIED);

module.exports = RTS;

/* nellie/mos6502/operations/RTS/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeRTSTick(processor) {
  console.debug(this.name);
  return false;
} // executeRTSTick()

const RTS = new Ellie.Processor.Operation(
  'RTS',
  'Return from Subroutine',
  executeRTSTick
); // RTS

RTS.addMode(0x60, MODES.IMPLIED);

module.exports = RTS;

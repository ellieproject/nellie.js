/* nellie/mos6502/operations/STX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeSTXTick(processor) {
  // no flag checks
  // X => B ( => Memory via addressing mode)
  processor.register.b.load(processor.register.x);
  return true;
} // executeSTXTick()

const STX = new Ellie.Processor.Operation(
  'STX',
  'Store X to Memory',
  executeSTXTick
); // STX

STX.addMode(0x8E, MODES.ABSOLUTE);
STX.addMode(0x96, MODES.ZERO_PAGE_Y);
STX.addMode(0x86, MODES.ZERO_PAGE);

module.exports = STX;

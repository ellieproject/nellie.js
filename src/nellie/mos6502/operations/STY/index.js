/* nellie/mos6502/operations/STY/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeSTY(processor) {
  // no flag checks
  // Y => B ( => Memory via addressing mode)
  processor.register.b.load(processor.register.y);
  return true;
} // executeSTY()

const STY = new Ellie.Processor.Operation(
  'STY',
  'Store Y to Memory',
  executeSTY
); // STY

STY.addMode(0x8C, MODES.ABSOLUTE);
STY.addMode(0x94, MODES.ZERO_PAGE_X);
STY.addMode(0x84, MODES.ZERO_PAGE);

module.exports = STY;

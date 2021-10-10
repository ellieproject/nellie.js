/* nellie/mos6502/operations/STA.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeSTA(processor) {
  console.debug(this.name);
  return false;
} // executeSTA()

const STA = new Ellie.Processor.Operation(
  'STA',
  'Store A to Memory',
  executeSTA
); // STA

STA.addMode(0x9D, MODES.ABSOLUTE_X);
STA.addMode(0x99, MODES.ABSOLUTE_Y);
STA.addMode(0x8D, MODES.ABSOLUTE);
STA.addMode(0x81, MODES.INDIRECT_X);
STA.addMode(0x91, MODES.INDIRECT_Y);
STA.addMode(0x95, MODES.ZERO_PAGE_X);
STA.addMode(0x85, MODES.ZERO_PAGE);

module.exports = STA;

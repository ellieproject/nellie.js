/* nellie/mos6502/operations/SBC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeSBC(processor) {
  console.debug(this.name);
  return false;
} // executeSBC()

const SBC = new Ellie.Processor.Operation(
  'SBC',
  'Subtract with Carry',
  executeSBC
); // SBC

SBC.addMode(0xFD, MODES.ABSOLUTE_X);
SBC.addMode(0xF9, MODES.ABSOLUTE_Y);
SBC.addMode(0xED, MODES.ABSOLUTE);
SBC.addMode(0xE9, MODES.IMMEDIATE);
SBC.addMode(0xE1, MODES.INDIRECT_X);
SBC.addMode(0xF1, MODES.INDIRECT_Y);
SBC.addMode(0xF5, MODES.ZERO_PAGE_X);
SBC.addMode(0xE5, MODES.ZERO_PAGE);

module.exports = SBC;

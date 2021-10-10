/* nellie/mos6502/operations/EOR.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeEOR(processor) {
  console.debug(this.name);
  return false;
} // executeEOR()

const EOR = new Ellie.Processor.Operation(
  'EOR',
  'Exclusive "OR"',
  executeEOR
); // EOR

EOR.addMode(0x5D, MODES.ABSOLUTE_X);
EOR.addMode(0x59, MODES.ABSOLUTE_Y);
EOR.addMode(0x4D, MODES.ABSOLUTE);
EOR.addMode(0x49, MODES.IMMEDIATE);
EOR.addMode(0x41, MODES.INDIRECT_X);
EOR.addMode(0x51, MODES.INDIRECT_Y);
EOR.addMode(0x55, MODES.ZERO_PAGE_X);
EOR.addMode(0x45, MODES.ZERO_PAGE);

module.exports = EOR;

/* nellie/mos6502/operations/ORA.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeORATick(processor) {
  console.debug(this.name);
  return false;
} // executeORATick()

const ORA = new Ellie.Processor.Operation(
  'ORA',
  '"OR" Memory to A',
  executeORATick
); // ORA

ORA.addMode(0x1D, MODES.ABSOLUTE_X);
ORA.addMode(0x19, MODES.ABSOLUTE_Y);
ORA.addMode(0x0D, MODES.ABSOLUTE);
ORA.addMode(0x09, MODES.IMMEDIATE);
ORA.addMode(0x01, MODES.INDIRECT_X);
ORA.addMode(0x11, MODES.INDIRECT_Y);
ORA.addMode(0x15, MODES.ZERO_PAGE_X);
ORA.addMode(0x05, MODES.ZERO_PAGE);

module.exports = ORA;

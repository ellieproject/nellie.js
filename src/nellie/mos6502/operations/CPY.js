/* nellie/mos6502/operations/CPY.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCPY(processor) {
  console.debug(this.name);
  return false;
} // executeCPY()

const CPY = new Ellie.Processor.Operation(
  'CPY',
  'Compare Memory with Y',
  executeCPY
); // CPY

CPY.addMode(0xCC, MODES.ABSOLUTE);
CPY.addMode(0xC0, MODES.IMMEDIATE);
CPY.addMode(0xC4, MODES.ZERO_PAGE);

module.exports = CPY;

/* nellie/mos6502/operations/INC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeINC(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeINC()

const INC = new Ellie.Processor.Operation(
  'INC',
  'Increment Memory',
  executeINC
); // INC

INC.addMode(0xFE, MODES.ABSOLUTE_X);
INC.addMode(0xEE, MODES.ABSOLUTE);
INC.addMode(0xF6, MODES.ZERO_PAGE_X);
INC.addMode(0xE6, MODES.ZERO_PAGE);

module.exports = INC;

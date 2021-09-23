/* nellie/mos6502/operations/BCS.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBCS(processor) {
  console.debug(this.name);
  return false;
} // executeBCS()

const BCS = new Ellie.Processor.Operation(
  'BCS',
  'Branch on Carry Set',
  executeBCS
); // BCS

BCS.addMode(0xB0, MODES.IMPLIED);

module.exports = BCS;

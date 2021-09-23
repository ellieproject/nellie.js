/* nellie/mos6502/operations/BNE.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBNE(processor) {
  console.debug(this.name);
  return false;
} // executeBNE()

const BNE = new Ellie.Processor.Operation(
  'BNE',
  'Branch on Result not Zero',
  executeBNE
); // BNE

BNE.addMode(0xD0, MODES.IMPLIED);

module.exports = BNE;

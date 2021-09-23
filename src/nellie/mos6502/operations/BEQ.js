/* nellie/mos6502/operations/BEQ.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBEQ(processor) {
  console.debug(this.name);
  return false;
} // executeBEQ()

const BEQ = new Ellie.Processor.Operation(
  'BEQ',
  'Branch on Result Zero',
  executeBEQ
); // BEQ

BEQ.addMode(0xF0, MODES.IMPLIED);

module.exports = BEQ;

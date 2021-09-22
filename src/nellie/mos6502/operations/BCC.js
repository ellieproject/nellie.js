/* nellie/mos6502/operations/BCC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBCC(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBCC()

const BCC = new Ellie.Processor.Operation(
  'BCC',
  'Branch on Carry Clear',
  executeBCC
); // BCC

BCC.addMode(0x90, MODES.IMPLIED);

module.exports = BCC;

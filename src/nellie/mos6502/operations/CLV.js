/* nellie/mos6502/opcodes/CLV.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCLV(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('V', 0);
  return true;
} // executeCLV()

const CLV = new Ellie.Processor.Operation(
  'CLV',
  'Clear Overflow Flag',
  executeCLV
); // CLV

CLV.addMode(0xB8, MODES.IMPLIED);

module.exports = CLV;

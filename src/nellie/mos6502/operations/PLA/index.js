/* nellie/mos6502/operations/PLA/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executePLA(processor) {
  console.debug(this.name);
  return false;
} // executePLA()

const PLA = new Ellie.Processor.Operation(
  'PLA',
  'Pull A from Stack',
  executePLA
); // PLA

PLA.addMode(0x68, MODES.IMPLIED);

module.exports = PLA;

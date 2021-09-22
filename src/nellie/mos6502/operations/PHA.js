/* nellie/mos6502/operations/PHA.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executePHA(instruction, processor) {
  console.debug(this.name);
  return false;
} // executePHA()

const PHA = new Ellie.Processor.Operation(
  'PHA',
  'Push A on Stack',
  executePHA
); // PHA

PHA.addMode(0x48, MODES.IMPLIED);

module.exports = PHA;

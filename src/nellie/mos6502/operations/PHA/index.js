/* nellie/mos6502/operations/PHA/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executePHATick(processor) {
  console.debug(this.name);
  return false;
} // executePHATick()

const PHA = new Ellie.Processor.Operation(
  'PHA',
  'Push A on Stack',
  executePHATick
); // PHA

PHA.addMode(0x48, MODES.IMPLIED);

module.exports = PHA;

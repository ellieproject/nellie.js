/* nellie/mos6502/operations/PLP.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executePLPTick(processor) {
  console.debug(this.name);
  return false;
} // executePLPTick()

const PLP = new Ellie.Processor.Operation(
  'PLP',
  'Pull Processor Status from Stack',
  executePLPTick
); // PLP

PLP.addMode(0x28, MODES.IMPLIED);

module.exports = PLP;

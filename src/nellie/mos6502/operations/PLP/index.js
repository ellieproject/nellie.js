/* nellie/mos6502/operations/PLP/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executePLP(processor) {
  console.debug(this.name);
  return false;
} // executePLP()

const PLP = new Ellie.Processor.Operation(
  'PLP',
  'Pull Processor Status from Stack',
  executePLP
); // PLP

PLP.addMode(0x28, MODES.IMPLIED);

module.exports = PLP;

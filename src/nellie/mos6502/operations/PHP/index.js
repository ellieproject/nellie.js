/* nellie/mos6502/operations/PHP/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executePHPTick(processor) {
  console.debug(this.name);
  return false;
} // executePHPTick()

const PHP = new Ellie.Processor.Operation(
  'PHP',
  'Push Processor Status on Stack',
  executePHPTick
); // PHP

PHP.addMode(0x08, MODES.IMPLIED);

module.exports = PHP;

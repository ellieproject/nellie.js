/* nellie/mos6502/operations/PHP/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executePHP(processor) {
  console.debug(this.name);
  return false;
} // executePHP()

const PHP = new Ellie.Processor.Operation(
  'PHP',
  'Push Processor Status on Stack',
  executePHP
); // PHP

PHP.addMode(0x08, MODES.IMPLIED);

module.exports = PHP;

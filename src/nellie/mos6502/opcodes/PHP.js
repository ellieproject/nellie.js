/* nellie/opcodes/PHP.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executePHP(instruction, processor) {
  console.debug(this.name);
  return;
} // executePHP()

const PHP = new Ellie.Opcode(
  'PHP',
  'Push Processor Status on Stack',
  executePHP
); // PHP

PHP.addAddressingMode(0x08, MODES.IMPLIED);

module.exports = PHP;

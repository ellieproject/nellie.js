/* nellie/opcodes/SED.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeSED(instruction, processor) {
  console.log(this);
  return;
} // executeSED()

const SED = new Ellie.Opcode(
  'SED',
  'Set Decimal Mode',
  executeSED
); // SED

SED.addAddressingMode(0xF8, MODES.IMPLIED);

module.exports = SED;

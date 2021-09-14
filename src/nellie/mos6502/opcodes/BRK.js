/* nellie/opcodes/BRK.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBRK(instruction, processor) {
  console.debug(this.name);
  return;
} // executeBRK()

const BRK = new Ellie.Opcode(
  'BRK',
  'Force Break',
  executeBRK
); // BRK

BRK.addAddressingMode(0x00, MODES.IMMEDIATE);

module.exports = BRK;

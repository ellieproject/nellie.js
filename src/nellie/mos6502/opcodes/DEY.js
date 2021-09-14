/* nellie/opcodes/DEY.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeDEY(instruction, processor) {
  console.debug(this.name);
  return;
} // executeDEY()

const DEY = new Ellie.Opcode(
  'DEY',
  'Decrement Y',
  executeDEY
);

DEY.addAddressingMode(0x88, MODES.IMPLIED);

module.exports = DEY;

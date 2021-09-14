/* nellie/opcodes/DEX.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeDEX(instruction, processor) {
  console.debug(this.name);
  return;
} // executeDEX()

const DEX = new Ellie.Opcode(
  'DEX',
  'Decrement X',
  executeDEX
); // DEX

DEX.addAddressingMode(0xCA, MODES.IMPLIED);

module.exports = DEX;

/* nellie/opcodes/INX.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeINX(instruction, processor) {
  console.log(this);
  return;
} // executeINX()

const INX = new Ellie.Opcode(
  'INX',
  'Increment X',
  executeINX
); // INX

INX.addAddressingMode(0xE8, MODES.IMPLIED);

module.exports = INX;

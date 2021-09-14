/* nellie/opcodes/INY.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeINY(instruction, processor) {
  console.log(this);
  return;
} // executeINY()

const INY = new Ellie.Opcode(
  'INY',
  'Increment Y',
  executeINY
); // INY

INY.addAddressingMode(0xC8, MODES.IMPLIED);

module.exports = INY;

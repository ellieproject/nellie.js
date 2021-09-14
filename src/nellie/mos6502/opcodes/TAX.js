/* nellie/opcodes/TAX.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTAX(instruction, processor) {
  console.log(this);
  return;
} // executeTAX()

const TAX = new Ellie.Opcode(
  'TAX',
  'Transfer A to X',
  executeTAX
); // TAX

TAX.addAddressingMode(0xAA, MODES.IMPLIED);

module.exports = TAX;

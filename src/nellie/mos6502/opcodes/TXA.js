/* nellie/opcodes/TXA.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeTXA(instruction, processor) {
  console.log(this);
  return;
} // executeTXA()

const TXA = new Ellie.Opcode(
  'TXA',
  'Transfer X to A',
  executeTXA
); // TXA

TXA.addAddressingMode(0x8A, MODES.IMPLIED);

module.exports = TXA;

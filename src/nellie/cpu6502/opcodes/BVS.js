/* nellie/opcodes/BVS.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBVS(instruction, processor) {
  console.log(this);
  return;
} // executeBVS()

const BVS = new Ellie.Opcode(
  'BVS',
  'Branch on Overflow Set',
  executeBVS
); // BVS

BVS.addAddressingMode(0x70, MODES.IMPLIED);

module.exports = BVS;

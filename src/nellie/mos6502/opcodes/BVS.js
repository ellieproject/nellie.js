/* nellie/mos6502/opcodes/BVS.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBVS(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBVS()

const BVS = new Ellie.Opcode(
  'BVS',
  'Branch on Overflow Set',
  executeBVS
); // BVS

BVS.addAddressingMode(0x70, MODES.IMPLIED);

module.exports = BVS;

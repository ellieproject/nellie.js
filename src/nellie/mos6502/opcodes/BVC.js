/* nellie/opcodes/BVC.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBVC(instruction, processor) {
  console.debug(this.name);
  return;
} // executeBVC()

const BVC = new Ellie.Opcode(
  'BVC',
  'Branch on Overflow Clear',
  executeBVC
); // BVC

BVC.addAddressingMode(0x50, MODES.IMPLIED);

module.exports = BVC;

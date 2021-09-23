/* nellie/mos6502/operations/BVC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBVC(processor) {
  console.debug(this.name);
  return false;
} // executeBVC()

const BVC = new Ellie.Processor.Operation(
  'BVC',
  'Branch on Overflow Clear',
  executeBVC
); // BVC

BVC.addMode(0x50, MODES.IMPLIED);

module.exports = BVC;

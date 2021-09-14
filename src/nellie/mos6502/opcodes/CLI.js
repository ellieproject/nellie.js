/* nellie/opcodes/CLI.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeCLI(instruction, processor) {
  console.log(this);
  return;
} // executeCLI()

const CLI = new Ellie.Opcode(
  'CLI',
  'Clear Interrupt Disable Bit',
  executeCLI
); // CLI

CLI.addAddressingMode(0x58, MODES.IMPLIED);

module.exports = CLI;

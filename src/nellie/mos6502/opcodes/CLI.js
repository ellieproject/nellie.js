/* nellie/opcodes/CLI.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeCLI(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('I', 0);
  return null;
} // executeCLI()

const CLI = new Ellie.Opcode(
  'CLI',
  'Clear Interrupt Disable Bit',
  executeCLI
); // CLI

CLI.addAddressingMode(0x58, MODES.IMPLIED);

module.exports = CLI;

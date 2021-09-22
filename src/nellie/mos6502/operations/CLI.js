/* nellie/mos6502/operations/CLI.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeCLI(instruction, processor) {
  console.debug(this.name);
  processor.register.p.bitSet('I', 0);
  return true;
} // executeCLI()

const CLI = new Ellie.Processor.Operation(
  'CLI',
  'Clear Interrupt Disable Bit',
  executeCLI
); // CLI

CLI.addMode(0x58, MODES.IMPLIED);

module.exports = CLI;

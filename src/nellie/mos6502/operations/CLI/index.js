/* nellie/mos6502/operations/CLI/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeCLITick(processor) {
  processor.register.p.bitSet('I', 0);
  return true;
} // executeCLITick()

const CLI = new Ellie.Processor.Operation(
  'CLI',
  'Clear Interrupt Disable Bit',
  executeCLITick
); // CLI

CLI.addMode(0x58, MODES.IMPLIED);

module.exports = CLI;

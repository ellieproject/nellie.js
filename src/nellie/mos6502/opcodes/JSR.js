/* nellie/mos6502/opcodes/JSR.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeJSR(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeJSR()

const JSR = new Ellie.Processor.Operation(
  'JSR',
  'Jump to Location Save Return Address',
  executeJSR
); // JSR

JSR.addMode(0x20, MODES.ABSOLUTE);

module.exports = JSR;

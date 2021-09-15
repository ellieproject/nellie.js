/* nellie/opcodes/JSR.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeJSR(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeJSR()

const JSR = new Ellie.Opcode(
  'JSR',
  'Jump to Location Save Return Address',
  executeJSR
); // JSR

JSR.addAddressingMode(0x20, MODES.ABSOLUTE);

module.exports = JSR;

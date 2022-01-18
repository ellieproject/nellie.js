/* nellie/mos6502/operations/JSR/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeJSRTick(processor) {
  console.debug(this.name);
  return false;
} // executeJSRTick()

const JSR = new Ellie.Processor.Operation(
  'JSR',
  'Jump to Location Save Return Address',
  executeJSRTick
); // JSR

JSR.addMode(0x20, MODES.ABSOLUTE);

module.exports = JSR;

/* nellie/mos6502/modes/immediate.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteImmediate(instruction, processor) {} // beforeExecuteImmediate()

var MODE_IMMEDIATE = new Ellie.Processor.Mode(
  'IMMEDIATE',
  'immediate',
  beforeExecuteImmediate
);

module.exports = MODE_IMMEDIATE;

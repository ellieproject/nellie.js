/* nellie/mos6502/modes/relative.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteRelative(instruction, processor) {} // beforeExecuteRelative()

var MODE_RELATIVE = new Ellie.Processor.Mode(
  'RELATIVE',
  'relative',
  beforeExecuteRelative
);

module.exports = MODE_RELATIVE;

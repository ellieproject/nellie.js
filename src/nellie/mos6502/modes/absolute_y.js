/* nellie/mos6502/modes/absolute_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteAbsoluteY(processor) {} // beforeExecuteAbsoluteY()

var MODE_ABSOLUTE_Y = new Ellie.Processor.Mode(
  'ABSOLUTE_Y',
  'absolute y',
  beforeExecuteAbsoluteY
);

module.exports = MODE_ABSOLUTE_Y;

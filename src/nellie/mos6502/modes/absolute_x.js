/* nellie/mos6502/modes/absolute_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteAbsoluteX(instruction, processor) {} // beforeExecuteAbsoluteX()

var MODE_ABSOLUTE_X = new Ellie.Processor.Mode(
  'ABSOLUTE_X',
  'absolute x',
  beforeExecuteAbsoluteX
);

module.exports = MODE_ABSOLUTE_X;

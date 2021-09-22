/* nellie/mos6502/modes/absolute_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteAbsoluteY(instruction, processor) {} // preexecuteAbsoluteY()

var MODE_ABSOLUTE_Y = new Ellie.Processor.Mode(
  'ABSOLUTE_Y',
  'absolute y',
  preexecuteAbsoluteY
);

module.exports = MODE_ABSOLUTE_Y;

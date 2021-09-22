/* nellie/mos6502/modes/relative.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteRelative(instruction, processor) {} // preexecuteRelative()

var MODE_RELATIVE = new Ellie.Processor.Mode(
  'RELATIVE',
  'relative',
  preexecuteRelative
);

module.exports = MODE_RELATIVE;

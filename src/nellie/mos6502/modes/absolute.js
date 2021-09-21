/* nellie/mos6502/modes/absolute.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteAbsolute(instruction, processor) {} // preexecuteAbsolute()

var MODE_ABSOLUTE = new Ellie.Processor.Mode(
  'absolute',
  preexecuteAbsolute
);

module.exports = MODE_ABSOLUTE;

/* nellie/mos6502/modes/indirect.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteIndirect(instruction, processor) {} // preexecuteIndirect()

var MODE_INDIRECT = new Ellie.Processor.Mode(
  'indirect',
  preexecuteIndirect
);

module.exports = MODE_INDIRECT;

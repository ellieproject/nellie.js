/* nellie/mos6502/modes/indirect.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteIndirect(instruction, processor) {} // beforeExecuteIndirect()

var MODE_INDIRECT = new Ellie.Processor.Mode(
  'INDIRECT',
  'indirect',
  beforeExecuteIndirect
);

module.exports = MODE_INDIRECT;

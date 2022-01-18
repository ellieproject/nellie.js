/* nellie/mos6502/modes/indirect/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* beforeExecuteIndirectTick(processor) {} // beforeExecuteIndirectTick()

var MODE_INDIRECT = new Ellie.Processor.Mode(
  'INDIRECT',
  'indirect',
  beforeExecuteIndirectTick
);

module.exports = MODE_INDIRECT;

/* nellie/mos6502/modes/indirect_y/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* beforeExecuteIndirectYTick(processor) {} // beforeExecuteIndirectYTick()

var MODE_INDIRECT_Y = new Ellie.Processor.Mode(
  'INDIRECT_Y',
  'indirect (post-y)',
  beforeExecuteIndirectYTick
);

module.exports = MODE_INDIRECT_Y;

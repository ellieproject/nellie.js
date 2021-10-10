/* nellie/mos6502/modes/indirect_y/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteIndirectY(processor) {} // beforeExecuteIndirectY()

var MODE_INDIRECT_Y = new Ellie.Processor.Mode(
  'INDIRECT_Y',
  'indirect (post-y)',
  beforeExecuteIndirectY
);

module.exports = MODE_INDIRECT_Y;

/* nellie/mos6502/modes/indirect_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteIndirectY(instruction, processor) {} // beforeExecuteIndirectY()

var MODE_INDIRECT_Y = new Ellie.Processor.Mode(
  'INDIRECT_Y',
  'indirect (post-y)',
  beforeExecuteIndirectY
);

module.exports = MODE_INDIRECT_Y;

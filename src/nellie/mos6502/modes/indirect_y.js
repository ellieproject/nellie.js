/* nellie/mos6502/modes/indirect_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteIndirectY(instruction, processor) {} // preexecuteIndirectY()

var MODE_INDIRECT_Y = new Ellie.Processor.Mode(
  'INDIRECT_Y',
  'indirect (post-y)',
  preexecuteIndirectY
);

module.exports = MODE_INDIRECT_Y;

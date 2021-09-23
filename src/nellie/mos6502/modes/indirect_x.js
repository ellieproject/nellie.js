/* nellie/mos6502/modes/indirect_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteIndirectX(instruction, processor) {} // beforeExecuteIndirectX()

var MODE_INDIRECT_X = new Ellie.Processor.Mode(
  'INDIRECT_X',
  'indirect (pre-x)',
  beforeExecuteIndirectX
);

module.exports = MODE_INDIRECT_X;
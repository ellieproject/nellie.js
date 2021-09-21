/* nellie/mos6502/modes/indirect_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteIndirectX(instruction, processor) {} // preexecuteIndirectX()

var MODE_INDIRECT_X = new Ellie.Processor.Mode(
  'indirect (pre-x)',
  preexecuteIndirectX
);

module.exports = MODE_INDIRECT_X;

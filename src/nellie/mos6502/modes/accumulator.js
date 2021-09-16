/* nellie/mos6502/modes/accumulator.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteAccumulator(instruction, processor) {
  processor.register.b.load(processor.register.a);
  return true;
} // preexecuteAccumulator()

function postexecuteAccumulator(instruction, processor) {
  processor.register.a.load(processor.register.b);
  return true;
} // postexecuteAccumulator()

var MODE_ACCUMULATOR = new Ellie.Opcode.Mode(
  'accumulator',
  preexecuteAccumulator,
  postexecuteAccumulator
);

module.exports = MODE_ACCUMULATOR;

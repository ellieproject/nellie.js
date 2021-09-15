/* nellie/opcodes/modes/accumulator.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessAccumulator(instruction, processor) {
  return processor.register.a;
} // preprocessAccumulator()

function postprocessAccumulator(instruction, processor, result) {
  processor.register.a = result;
  return null;
} // postprocessAccumulator()

var MODE_ACCUMULATOR = new Ellie.Opcode.Mode(
  'accumulator',
  preprocessAccumulator,
  postprocessAccumulator
);

module.exports = MODE_ACCUMULATOR;

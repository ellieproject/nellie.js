/* nellie/opcodes/modes/accumulator.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessAccumulator(instruction, processor) {} // preprocessAccumulator()

var MODE_ACCUMULATOR = new Ellie.Opcode.Mode(
  'accumulator',
  preprocessAccumulator
);

module.exports = MODE_ACCUMULATOR;

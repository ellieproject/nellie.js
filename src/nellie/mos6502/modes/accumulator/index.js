/* nellie/mos6502/modes/accumulator/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteAccumulator(processor) {
  processor.register.b.load(processor.register.a);
  return true;
} // beforeExecuteAccumulator()

function afterExecuteAccumulator(processor) {
  processor.register.a.load(processor.register.b);
  return true;
} // afterExecuteAccumulator()

var MODE_ACCUMULATOR = new Ellie.Processor.Mode(
  'ACCUMULATOR',
  'accumulator',
  beforeExecuteAccumulator,
  afterExecuteAccumulator
);

module.exports = MODE_ACCUMULATOR;

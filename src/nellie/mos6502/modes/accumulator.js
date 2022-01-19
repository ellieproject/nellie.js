/* nellie/mos6502/modes/accumulator.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* beforeExecuteAccumulatorTick(processor) {
  processor.register.b.load(processor.register.a);
  return true;
} // beforeExecuteAccumulatorTick()

function* afterExecuteAccumulatorTick(processor) {
  processor.register.a.load(processor.register.b);
  return true;
} // afterExecuteAccumulatorTick()

var MODE_ACCUMULATOR = new Ellie.Processor.Mode(
  'ACCUMULATOR',
  'accumulator',
  beforeExecuteAccumulatorTick,
  afterExecuteAccumulatorTick
);

module.exports = MODE_ACCUMULATOR;

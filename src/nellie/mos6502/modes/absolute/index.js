/* nellie/mos6502/modes/absolute/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* noCallback() {}

function* beforeExecuteAbsoluteTick(processor, callback=noCallback) {
  // step forward to read the next two (absolute) bytes
  // into the address register; take this as absolute address,
  // and transfer the value at this address to register b
  let absolute;
  let operand;
  // lower byte
  operand    = processor.register.pc.inc();
  processor.register.ma.set( processor.memory.main.get(operand) );
  yield* processor.clock.tick();
  // upper byte
  operand    = processor.register.pc.inc();
  processor.register.ma.inc( processor.memory.main.get(operand) << 8 );
  yield* processor.clock.tick();
  // adjust for absolute_x or absolute_y via callback
  yield* callback(processor);
  // lookup the value that register ma points to
  absolute = processor.memory.main.get(processor.register.ma.get());
  // store this value into register b
  processor.register.b.set(absolute);
  yield* processor.clock.tick();
  return true;
} // beforeExecuteAbsoluteTick()

function* afterExecuteAbsoluteTick(processor) {
  // set the memory address pointed to by register ma
  // according to the value found in register b
  // if register b has not changed, there will be no effect
  processor.memory.main.set(processor.register.ma.get(), processor.register.b.get());
  yield* processor.clock.tick();
  return true;
} // beforeExecuteAbsoluteTick()

var MODE_ABSOLUTE = new Ellie.Processor.Mode(
  'ABSOLUTE',
  'absolute',
  beforeExecuteAbsoluteTick,
  afterExecuteAbsoluteTick
);

module.exports = MODE_ABSOLUTE;

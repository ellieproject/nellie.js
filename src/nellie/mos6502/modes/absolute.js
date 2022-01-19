/* nellie/mos6502/modes/absolute.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* noCallback() {}

function* beforeExecuteAbsoluteTick(processor, callback=noCallback) {
  // step forward to read the next two (absolute) bytes
  // into the address register; take this as absolute address,
  // and transfer the value at this address to register b
  let absolute;
  let newPC;
  // lower byte
  newPC = processor.register.pc.inc();
  processor.register.ma.set( processor.memory.main.get(newPC) );
  yield* processor.clock.tick();
  // upper byte
  newPC = processor.register.pc.inc();
  processor.register.ma.inc( processor.memory.main.get(newPC) << 8 );
  yield* processor.clock.tick();
  // adjust for absolute_x or absolute_y via callback
  yield* callback(processor);
  // lookup the value that register ma points to
  absolute = processor.memory.main.get(processor.register.ma.get());
  // store this value into register b
  processor.register.b.set(absolute);
  // we cannot predict whether ABSOLUTE will want a READ or a WRITE...
  // ...so we do both
  // there is no need to tick the clock here
  // there will be a tick later at cleanup to stabilize any stray signals
  return true;
} // beforeExecuteAbsoluteTick()

function* afterExecuteAbsoluteTick(processor) {
  // set the memory address pointed to by register ma
  // according to the value found in register b
  // if register b has not changed, there will be no effect
  processor.memory.main.set(processor.register.ma.get(), processor.register.b.get());
  // we cannot predict whether ABSOLUTE will want a READ or a WRITE...
  // ...so we do both
  // there is no need to tick the clock here
  // there will be a tick later at cleanup to stabilize any stray signals
  return true;
} // beforeExecuteAbsoluteTick()

var MODE_ABSOLUTE = new Ellie.Processor.Mode(
  'ABSOLUTE',
  'absolute',
  beforeExecuteAbsoluteTick,
  afterExecuteAbsoluteTick
);

module.exports = MODE_ABSOLUTE;

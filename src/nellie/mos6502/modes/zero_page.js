/* nellie/mos6502/modes/zero_page.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* noCallback() {}

function* beforeExecuteZeroPageTick(processor, callback=noCallback) {
  // step PC forward to read the next byte
  let newPC = processor.register.pc.inc();
  // take this as a zero page address, 0x00XX
  processor.register.ma.set( processor.memory.main.get(newPC) );
  yield* processor.clock.tick();
  // adjust for zero_page_x or zero_page_y via callback
  yield* callback(processor);
  // lookup the value at memory address register (MA)
  let zp = processor.memory.main.get( processor.register.ma.get() );
  // store this value into register b
  processor.register.b.set(zp);
  // we cannot predict whether ZERO_PAGE will want a READ or a WRITE...
  // ...so we do both
  // there is no need to tick the clock here
  // there will be a tick later at cleanup to stabilize any stray signals
  return true;
} // beforeExecuteZeroPageTick()

function* afterExecuteZeroPageTick(processor) {
  // set the memory address pointed to by register ma
  // according to the value found in register b
  // if register b has not changed, there will be no effect
  processor.memory.main.set(processor.register.ma.get(), processor.register.b.get());
  // we cannot predict whether ZERO_PAGE will want a READ or a WRITE...
  // ...so we do both
  // there is no need to tick the clock here
  // there will be a tick later at cleanup to stabilize any stray signals
  return true;

} // afterExecuteZeroPageTick()

var MODE_ZERO_PAGE = new Ellie.Processor.Mode(
  'ZERO_PAGE',
  'zero page',
  beforeExecuteZeroPageTick,
  afterExecuteZeroPageTick
);

module.exports = MODE_ZERO_PAGE;

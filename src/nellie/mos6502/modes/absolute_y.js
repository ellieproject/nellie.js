/* nellie/mos6502/modes/absolute_y.js
 *
 */

const Ellie         = require('@ellieproject/ellie');
const MODE_ABSOLUTE = require('@ellieproject/nellie/mos6502/modes/absolute');

function* beforeExecuteAbsoluteYTick_callback(processor) {
  // check the top byte
  // if addr + y overflows to a new page,
  // take the page boundary penalty
  let page   = processor.register.ma.get() >> 8;
  processor.register.ma.inc( processor.register.y.get() );
  if (page !== (processor.register.ma.get() >> 8)) { // different page (high byte)
    yield* processor.clock.tick();
  } // if page
} // beforeExecuteAbsoluteY_callbackTick()

function* beforeExecuteAbsoluteYTick(processor) {
  return yield* MODE_ABSOLUTE.beforeExecuteTick(processor, beforeExecuteAbsoluteYTick_callback);
} // beforeExecuteAbsoluteYTick()

var MODE_ABSOLUTE_Y = new Ellie.Processor.Mode(
  'ABSOLUTE_Y',
  'absolute y',
  beforeExecuteAbsoluteYTick,
  MODE_ABSOLUTE.afterExecuteTick.bind(MODE_ABSOLUTE_Y)
);

module.exports = MODE_ABSOLUTE_Y;

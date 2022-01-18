/* nellie/mos6502/modes/absolute_x/index.js
 *
 */

const Ellie         = require('@ellieproject/ellie');
const MODE_ABSOLUTE = require('@ellieproject/nellie/mos6502/modes/absolute');

function* beforeExecuteAbsoluteXTick_callback(processor) {
  // check the top byte
  // if addr + x overflows to a new page,
  // take the page boundary penalty
  let page   = processor.register.ma.get() >> 8;
  processor.register.ma.inc( processor.register.x.get() );
  if (page !== (processor.register.ma.get() >> 8)) { // different page (high byte)
    yield* processor.clock.tick(1);
  } // if page
} // beforeExecuteAbsoluteX_callbackTick()

function* beforeExecuteAbsoluteXTick(processor) {
  return MODE_ABSOLUTE.beforeExecute(processor, beforeExecuteAbsoluteXTick_callback);
} // beforeExecuteAbsoluteXTick()

var MODE_ABSOLUTE_X = new Ellie.Processor.Mode(
  'ABSOLUTE_X',
  'absolute x',
  beforeExecuteAbsoluteXTick,
  MODE_ABSOLUTE.afterExecuteTick.bind(MODE_ABSOLUTE_X)
);

module.exports = MODE_ABSOLUTE_X;

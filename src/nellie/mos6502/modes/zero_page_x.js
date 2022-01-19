/* nellie/mos6502/modes/zero_page_x.js
 *
 */

const Ellie          = require('@ellieproject/ellie');
const MODE_ZERO_PAGE = require('@ellieproject/nellie/mos6502/modes/zero_page');

function* beforeExecuteZeroPageXTick_callback(processor) {
  // add X to the memory address before lookup
  processor.register.ma.inc( processor.register.x.get() );
  // take only the bottom 8 bits
  processor.register.ma.set( processor.register.ma.get() & 0xFF );
} // beforeExecuteZeroPageXTick_callback()

function* beforeExecuteZeroPageXTick(processor) {
  return yield* MODE_ZERO_PAGE.beforeExecuteTick(processor, beforeExecuteZeroPageXTick_callback);
} // beforeExecuteZeroPageXTick()

var MODE_ZERO_PAGE_X = new Ellie.Processor.Mode(
  'ZERO_PAGE_X',
  'zero page x',
  beforeExecuteZeroPageXTick,
  MODE_ZERO_PAGE.afterExecuteTick.bind(MODE_ZERO_PAGE_X)
);

module.exports = MODE_ZERO_PAGE_X;

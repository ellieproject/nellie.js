/* nellie/mos6502/modes/zero_page_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* beforeExecuteZeroPageYTick(processor) {
  // step forward to read the next (zero page) byte
  let operand = processor.register.pc.inc();
  this.addr   = processor.memory.main.data[ operand ];
  // add X to the address before lookup
  this.addr  += processor.register.y.get();
  // take only the bottom 8 bits (zero page)
  this.addr  &= 0xFF;
  // lookup the value at this.addr
  let zpy = processor.memory.main.data[ this.addr ];
  processor.register.b.set(zpy);
  return true;
} // beforeExecuteZeroPageXTick()

function* afterExecuteZeroPageYTick(processor) {
  // store b into this.addr
  processor.memory.main.data[ this.addr ] = processor.register.b.get();
  return true;
} // afterExecuteZeroPageYTick()

var MODE_ZERO_PAGE_Y = new Ellie.Processor.Mode(
  'ZERO_PAGE_Y',
  'zero page y',
  beforeExecuteZeroPageYTick,
  afterExecuteZeroPageYTick
);

module.exports = MODE_ZERO_PAGE_Y;

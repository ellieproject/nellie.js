/* nellie/mos6502/modes/zero_page_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* beforeExecuteZeroPageXTick(processor) {
  // step forward to read the next (zero page) byte
  let operand = processor.register.pc.inc();
  this.addr   = processor.memory.main.data[ operand ];
  // add X to the address before lookup
  this.addr  += processor.register.x.get();
  // take only the bottom 8 bits (zero page)
  this.addr  &= 0xFF;
  // lookup the value at this.addr
  let zpx = processor.memory.main.data[ this.addr ];
  processor.register.b.set(zpx);
  return true;
} // beforeExecuteZeroPageXTick()

function* afterExecuteZeroPageXTick(processor) {
  // store b into this.addr
  processor.memory.main.data[ this.addr ] = processor.register.b.get();
  return true;
} // afterExecuteZeroPageXTick()

var MODE_ZERO_PAGE_X = new Ellie.Processor.Mode(
  'ZERO_PAGE_X',
  'zero page x',
  beforeExecuteZeroPageXTick,
  afterExecuteZeroPageXTick
);

module.exports = MODE_ZERO_PAGE_X;

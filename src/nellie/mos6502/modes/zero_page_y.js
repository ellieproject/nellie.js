/* nellie/mos6502/modes/zero_page_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteZeroPageY(processor) {
  // step forward to read the next (zero page) byte
  let operand = processor.register.pc.inc();
  this.addr   = processor.memory.main.data[ operand ];
  // add X to the address before lookup
  this.addr  += processor.register.y.get();
  // lookup the value at this.addr
  let zpy = processor.memory.main.data[ this.addr ];
  processor.register.b.set(zpy);
  return true;
} // beforeExecuteZeroPageX()

function afterExecuteZeroPageY(processor) {
  // store b into this.addr
  processor.memory.main.data[ this.addr ] = processor.register.b.get();
  return true;
} // afterExecuteZeroPageY()

var MODE_ZERO_PAGE_Y = new Ellie.Processor.Mode(
  'ZERO_PAGE_Y',
  'zero page y',
  beforeExecuteZeroPageY,
  afterExecuteZeroPageY
);

module.exports = MODE_ZERO_PAGE_Y;

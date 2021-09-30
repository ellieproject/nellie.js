/* nellie/mos6502/modes/absolute_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteAbsoluteY(processor) {
  // step forward to read the next two (absolute) byte
  let operand = processor.register.pc.inc();
  this.addr   = processor.memory.main.data[ operand ];
  operand     = processor.register.pc.inc();
  this.addr  += processor.memory.main.data[ operand ] << 8;
  // add X to the address before lookup
  this.addr  += processor.register.y.get();
  // lookup the value at this.addr
  let abs = processor.memory.main.data[ this.addr ];
  processor.register.b.set(abs);
  return true;
} // beforeExecuteAbsoluteY()

function afterExecuteAbsoluteY(processor) {
  // store b into this.addr
  processor.memory.main.data[ this.addr ] = processor.register.b.get();
  return true;
} // afterExecuteAbsoluteY()

var MODE_ABSOLUTE_Y = new Ellie.Processor.Mode(
  'ABSOLUTE_Y',
  'absolute y',
  beforeExecuteAbsoluteY,
  afterExecuteAbsoluteY
);

module.exports = MODE_ABSOLUTE_Y;

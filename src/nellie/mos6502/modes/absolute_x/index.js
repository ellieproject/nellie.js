/* nellie/mos6502/modes/absolute_x/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteAbsoluteX(processor) {
  // step forward to read the next two (absolute) byte
  let operand = processor.register.pc.inc();
  this.addr   = processor.memory.main.data[ operand ];
  operand     = processor.register.pc.inc();
  this.addr  += processor.memory.main.data[ operand ] << 8;
  // add X to the address before lookup
  this.addr  += processor.register.x.get();
  // lookup the value at this.addr
  let abs = processor.memory.main.data[ this.addr ];
  processor.register.b.set(abs);
  return true;
} // beforeExecuteAbsoluteX()

function afterExecuteAbsoluteX(processor) {
  // store b into this.addr
  processor.memory.main.data[ this.addr ] = processor.register.b.get();
  return true;
} // afterExecuteAbsoluteX()

var MODE_ABSOLUTE_X = new Ellie.Processor.Mode(
  'ABSOLUTE_X',
  'absolute x',
  beforeExecuteAbsoluteX,
  afterExecuteAbsoluteX
);

module.exports = MODE_ABSOLUTE_X;

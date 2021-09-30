/* nellie/mos6502/modes/absolute.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteAbsolute(processor) {
  // step forward to read the next two (absolute) byte
  let operand = processor.register.pc.inc();
  this.addr   = processor.memory.main.data[ operand ];
  operand     = processor.register.pc.inc();
  this.addr  += processor.memory.main.data[ operand ] << 8;
  // lookup the value at this.addr
  let abs = processor.memory.main.data[ this.addr ];
  processor.register.b.set(abs);
  return true;
} // beforeExecuteAbsolute()

function afterExecuteAbsolute(processor) {
  // store b into this.addr
  processor.memory.main.data[ this.addr ] = processor.register.b.get();
  return true;
} // afterExecuteAbsolute()

var MODE_ABSOLUTE = new Ellie.Processor.Mode(
  'ABSOLUTE',
  'absolute',
  beforeExecuteAbsolute,
  afterExecuteAbsolute
);

module.exports = MODE_ABSOLUTE;

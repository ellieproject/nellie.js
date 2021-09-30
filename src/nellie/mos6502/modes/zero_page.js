/* nellie/mos6502/modes/zero_page.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteZeroPage(processor) {
  // step forward to read the next (zero page) byte
  let operand = processor.register.pc.inc();
  this.addr   = processor.memory.main.data[ operand ];
  // lookup the value at this.addr
  let abs = processor.memory.main.data[ this.addr ];
  processor.register.b.set(abs);
  return true;
} // beforeExecuteZeroPage()

function afterExecuteZeroPage(processor) {
  // store b into this.addr
  processor.memory.main.data[ this.addr ] = processor.register.b.get();
  return true;
} // afterExecuteAbsolute()

var MODE_ZERO_PAGE = new Ellie.Processor.Mode(
  'ZERO_PAGE',
  'zero page',
  beforeExecuteZeroPage,
  afterExecuteZeroPage
);

module.exports = MODE_ZERO_PAGE;

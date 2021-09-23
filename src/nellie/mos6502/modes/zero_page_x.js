/* nellie/mos6502/modes/zero_page_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteZeroPageX(processor) {} // beforeExecuteZeroPageX()

var MODE_ZERO_PAGE_X = new Ellie.Processor.Mode(
  'ZERO_PAGE_X',
  'zero page x',
  beforeExecuteZeroPageX
);

module.exports = MODE_ZERO_PAGE_X;

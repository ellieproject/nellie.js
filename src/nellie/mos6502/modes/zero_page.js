/* nellie/mos6502/modes/zero_page.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteZeroPage(instruction, processor) {} // beforeExecuteZeroPage()

var MODE_ZERO_PAGE = new Ellie.Processor.Mode(
  'ZERO_PAGE',
  'zero page',
  beforeExecuteZeroPage
);

module.exports = MODE_ZERO_PAGE;

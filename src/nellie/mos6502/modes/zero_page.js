/* nellie/mos6502/modes/zero_page.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteZeroPage(instruction, processor) {} // preexecuteZeroPage()

var MODE_ZERO_PAGE = new Ellie.Processor.Mode(
  'zero page',
  preexecuteZeroPage
);

module.exports = MODE_ZERO_PAGE;

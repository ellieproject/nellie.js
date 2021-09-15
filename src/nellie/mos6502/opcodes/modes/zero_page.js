/* nellie/opcodes/modes/zero_page.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteZeroPage(instruction, processor) {} // preexecuteZeroPage()

var MODE_ZERO_PAGE = new Ellie.Opcode.Mode(
  'zero page',
  preexecuteZeroPage
);

module.exports = MODE_ZERO_PAGE;

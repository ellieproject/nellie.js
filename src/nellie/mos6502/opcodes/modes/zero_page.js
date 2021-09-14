/* nellie/opcodes/modes/zero_page.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessZeroPage(instruction, processor) {} // preprocessZeroPage()

var MODE_ZERO_PAGE = new Ellie.Opcode.Mode(
  'zero page',
  preprocessZeroPage
);

module.exports = MODE_ZERO_PAGE;

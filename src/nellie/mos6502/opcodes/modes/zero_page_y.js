/* nellie/opcodes/modes/zero_page_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteZeroPageY(instruction, processor) {} // preexecuteZeroPageY()

var MODE_ZERO_PAGE_Y = new Ellie.Opcode.Mode(
  'zero page y',
  preexecuteZeroPageY
);

module.exports = MODE_ZERO_PAGE_Y;
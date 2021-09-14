/* nellie/opcodes/modes/zero_page_y.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessZeroPageY(instruction, processor) {} // preprocessZeroPageY()

var MODE_ZERO_PAGE_Y = new Ellie.Opcode.Mode(
  'zero page y',
  preprocessZeroPageY
);

module.exports = MODE_ZERO_PAGE_Y;

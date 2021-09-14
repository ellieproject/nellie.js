/* nellie/opcodes/modes/zero_page_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preprocessZeroPageX(instruction, processor) {} // preprocessZeroPageX()

var MODE_ZERO_PAGE_X = new Ellie.Opcode.Mode(
  'zero page x',
  preprocessZeroPageX
);

module.exports = MODE_ZERO_PAGE_X;

/* nellie/mos6502/modes/zero_page_x.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function preexecuteZeroPageX(instruction, processor) {} // preexecuteZeroPageX()

var MODE_ZERO_PAGE_X = new Ellie.Opcode.Mode(
  'zero page x',
  preexecuteZeroPageX
);

module.exports = MODE_ZERO_PAGE_X;

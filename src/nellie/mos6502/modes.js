/* nellie/mos6502/modes.js
 *
 */

const MODES = {
  ABSOLUTE_X:  require('@ellieproject/nellie/mos6502/modes/absolute_x'),
  ABSOLUTE_Y:  require('@ellieproject/nellie/mos6502/modes/absolute_y'),
  ABSOLUTE:    require('@ellieproject/nellie/mos6502/modes/absolute'),
  ACCUMULATOR: require('@ellieproject/nellie/mos6502/modes/accumulator'),
  IMMEDIATE:   require('@ellieproject/nellie/mos6502/modes/immediate'),
  IMPLIED:     require('@ellieproject/nellie/mos6502/modes/implied'),
  INDIRECT_X:  require('@ellieproject/nellie/mos6502/modes/indirect_x'),
  INDIRECT_Y:  require('@ellieproject/nellie/mos6502/modes/indirect_y'),
  INDIRECT:    require('@ellieproject/nellie/mos6502/modes/indirect'),
  RELATIVE:    require('@ellieproject/nellie/mos6502/modes/relative'),
  ZERO_PAGE_X: require('@ellieproject/nellie/mos6502/modes/zero_page_x'),
  ZERO_PAGE_Y: require('@ellieproject/nellie/mos6502/modes/zero_page_y'),
  ZERO_PAGE:   require('@ellieproject/nellie/mos6502/modes/zero_page')
}; // MODES

module.exports = MODES;

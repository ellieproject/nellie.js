/* nellie/opcodes/modes.js
 *
 */

const MODES = {
  ABSOLUTE_X:  require('./modes/absolute_x.js'),
  ABSOLUTE_Y:  require('./modes/absolute_y.js'),
  ABSOLUTE:    require('./modes/absolute.js'),
  ACCUMULATOR: require('./modes/accumulator.js'),
  IMMEDIATE:   require('./modes/immediate.js'),
  IMPLIED:     require('./modes/implied.js'),
  INDIRECT_X:  require('./modes/indirect_x.js'),
  INDIRECT_Y:  require('./modes/indirect_y.js'),
  INDIRECT:    require('./modes/indirect.js'),
  RELATIVE:    require('./modes/relative.js'),
  ZERO_PAGE_X: require('./modes/zero_page_x.js'),
  ZERO_PAGE_Y: require('./modes/zero_page_y.js'),
  ZERO_PAGE:   require('./modes/zero_page.js')
}; // MODES

module.exports = MODES;

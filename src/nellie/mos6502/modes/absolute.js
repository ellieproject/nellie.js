/* nellie/mos6502/modes/absolute.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteAbsolute(processor) {} // beforeExecuteAbsolute()

var MODE_ABSOLUTE = new Ellie.Processor.Mode(
  'ABSOLUTE',
  'absolute',
  beforeExecuteAbsolute
);

module.exports = MODE_ABSOLUTE;

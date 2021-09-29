/* nellie/mos6502/modes/relative.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteRelative(processor) {
  // step forward to read the next (relative) byte
  processor.register.pc.set(processor.register.pc.get() + 1);
  let rel = processor.memory.main.data[ processor.register.pc.get() ];
  processor.register.b.set(rel);
  return true;
} // beforeExecuteRelative()

var MODE_RELATIVE = new Ellie.Processor.Mode(
  'RELATIVE',
  'relative',
  beforeExecuteRelative
);

module.exports = MODE_RELATIVE;

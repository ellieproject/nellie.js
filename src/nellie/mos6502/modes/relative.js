/* nellie/mos6502/modes/relative.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* beforeExecuteRelativeTick(processor) {
  // step forward to read the next (relative) byte
  const addr = processor.register.pc.inc();
  const rel = processor.memory.main.data[ addr ];
  processor.register.b.set(rel);
  return true;
} // beforeExecuteRelativeTick()

var MODE_RELATIVE = new Ellie.Processor.Mode(
  'RELATIVE',
  'relative',
  beforeExecuteRelativeTick
);

module.exports = MODE_RELATIVE;

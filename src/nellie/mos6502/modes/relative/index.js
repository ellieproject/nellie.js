/* nellie/mos6502/modes/relative/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteRelative(processor) {
  // step forward to read the next (relative) byte
  const addr = processor.register.pc.inc();
  const rel = processor.memory.main.data[ addr ];
  processor.register.b.set(rel);
  return true;
} // beforeExecuteRelative()

var MODE_RELATIVE = new Ellie.Processor.Mode(
  'RELATIVE',
  'relative',
  beforeExecuteRelative
);

module.exports = MODE_RELATIVE;

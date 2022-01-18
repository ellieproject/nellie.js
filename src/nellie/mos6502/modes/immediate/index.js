/* nellie/mos6502/modes/immediate/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function* beforeExecuteImmediateTick(processor) {
  // step forward to read the next (immediate) byte
  const addr = processor.register.pc.inc();
  const imm = processor.memory.main.data[ addr ];
  processor.register.b.set(imm);
  return true;
} // beforeExecuteImmediateTick()

// afterExecuteImmediateTick() intentionally left blank

var MODE_IMMEDIATE = new Ellie.Processor.Mode(
  'IMMEDIATE',
  'immediate',
  beforeExecuteImmediateTick
);

module.exports = MODE_IMMEDIATE;

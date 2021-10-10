/* nellie/mos6502/modes/immediate.js
 *
 */

const Ellie = require('@ellieproject/ellie');

function beforeExecuteImmediate(processor) {
  // step forward to read the next (immediate) byte
  const addr = processor.register.pc.inc();
  const imm = processor.memory.main.data[ addr ];
  processor.register.b.set(imm);
  return true;
} // beforeExecuteImmediate()

// afterExecuteImmediate() intentionally left blank

var MODE_IMMEDIATE = new Ellie.Processor.Mode(
  'IMMEDIATE',
  'immediate',
  beforeExecuteImmediate
);

module.exports = MODE_IMMEDIATE;

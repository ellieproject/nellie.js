/* test/shared/nellie/mos6502/operations/set_or_clear_bit_mode.js
 *
 * tests for the modes of CLC, CLD, CLI, CLV, SEC, SED, SEI
 * mode tests should include:
 *   - exec(MODE...) should return this
 *   - exec(MODE...) should [operation effect]
 *   - MOS6502.execPC() should increment clock by [time]
 *
 * as meta-tests, theis file must be required,
 * then constructed using the generateSharedTests() method.
 */

function generateSharedTests(test, op, mode, flag, setOrClear, clockTicks) {
  let modeName = Object.keys(op.mode).find(key => (op.mode[key] === mode));
  let inverse = 0;
  if (setOrClear === 0) {
    inverse = 1;
  }
  test.beforeEach((t) => {
    t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  });

  test(`exec(${modeName}...) should return this`, (t) => {
    const MOS6502 = t.context.MOS6502;
    t.is(op.exec(mode, MOS6502), op);
  });

  test(`exec(${modeName}...) should set ${flag} flag to ${setOrClear}`, (t) => {
    const MOS6502 = t.context.MOS6502;
    MOS6502.register.p.bitSet(flag, inverse); // force opposite
    op.exec(mode, MOS6502);
    t.is(MOS6502.register.p.bit(flag), setOrClear);
  });

  test(`MOS6502.execPC() should increment clock by ${clockTicks}`, (t) => {
    const MOS6502 = t.context.MOS6502;
    MOS6502.register.pc.set(0x0000);       // set the PC to a known position
    MOS6502.memory.main.set(0x0000, mode); // set this memory address to opcode
    MOS6502.clock.count = 0;               // set the clock to a known position
    MOS6502.execPC();                      // no arguments needed, comes from PC
    t.is(MOS6502.clock.count, clockTicks);
  });
} // generateSharedTests()

module.exports = generateSharedTests;

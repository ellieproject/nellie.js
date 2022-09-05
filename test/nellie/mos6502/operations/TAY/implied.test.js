/* test/nellie/mos6502/operations/TAY/implied.test.js
 *
 * tests for the IMPLIED mode of the TAY operation
 * mode tests should include:
 *   - exec(MODE...) should return this
 *   - exec(MODE...) should [operation effect]
 *   - MOS6502.execPC() should increment clock by [time]
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP      = require('@ellieproject/nellie/mos6502/operations/TAY');
  t.context.MODE    = t.context.OP.mode.IMPLIED; // this is an opcode
});

test('exec(IMPLIED...) should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = t.context.MODE;
  t.is(OP.exec(MODE, MOS6502), OP);
});

test('exec(IMPLIED...) should set X from A', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = t.context.MODE;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.y.set(0x00);
  OP.exec(MODE, MOS6502);
  t.is(MOS6502.register.a.get(), 0xFF);
  t.is(MOS6502.register.y.get(), 0xFF);
});

test('MOS6502.execPC() should increment clock by 2', (t) => {
  const MOS6502 = t.context.MOS6502;
  const MODE    = t.context.MODE;
  MOS6502.register.pc.set(0x0000);       // set the PC to a known position
  MOS6502.memory.main.set(0x0000, MODE); // set this memory address to opcode
  MOS6502.clock.count = 0;               // set the clock to a known position
  MOS6502.execPC();                      // no arguments needed, comes from PC
  t.is(MOS6502.clock.count, 2);
});

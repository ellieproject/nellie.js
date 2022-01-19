/* test/nellie/mos6502/modes/absolute_y.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.MODE = require('@ellieproject/nellie/mos6502/modes/absolute_y');
});

test('beforeExecute() should return true', (t) => {
  const MOS6502 = t.context.MOS6502;
  const MODE    = t.context.MODE;
  t.is(MODE.beforeExecute(MOS6502), true);
});

test('beforeExecute() should load the ALU from memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const MODE    = t.context.MODE;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.b.set(0x00);
  MOS6502.register.y.set(0x0F);
  MOS6502.memory.main.set(0x0001, 0xF0);
  MOS6502.memory.main.set(0x0002, 0x01);
  MOS6502.memory.main.set(0x01FF, 0xAA); // 0x0100 + 0x00F0 + 0x000F
  // verify the numbers are different
  t.is(MOS6502.register.b.get(), 0x00);
  MODE.beforeExecute(MOS6502);
  t.is(MOS6502.register.b.get(), 0xAA);
});

test('beforeExecute() should increment the PC by two', (t) => {
  const MOS6502 = t.context.MOS6502;
  const MODE    = t.context.MODE;
  MOS6502.register.pc.set(0x0000);
  // verify the numbers are different
  t.is(MOS6502.register.pc.get(), 0x0000);
  MODE.beforeExecute(MOS6502);
  t.is(MOS6502.register.pc.get(), 0x0002);
});

// since this uses absolute_shared.afterExecute with no callback,
// there's nothing extra to test for now

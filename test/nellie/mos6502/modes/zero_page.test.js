/* test/nellie/mos6502/modes/zero_page.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.MODE = require('@ellieproject/nellie/mos6502/modes/zero_page');
});

test('beforeExecute() should return true', (t) => {
  const MOS6502 = t.context.MOS6502;
  t.is(t.context.MODE.beforeExecute(MOS6502), true);
});

test('beforeExecute() should load the zero page operand into ALU', (t) => {
  let MOS6502 = t.context.MOS6502;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.b.set(0x00);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0xAA;
  // verify the numbers are different
  t.is(MOS6502.register.b.bits, 0x00);
  t.context.MODE.beforeExecute(MOS6502);
  t.is(MOS6502.register.b.bits, 0xAA);
});

test('beforeExecute() should increment the PC', (t) => {
  let MOS6502 = t.context.MOS6502;
  MOS6502.register.pc.set(0x0000);
  // verify the numbers are different
  t.is(MOS6502.register.pc.bits, 0x0000);
  t.context.MODE.beforeExecute(MOS6502);
  t.is(MOS6502.register.pc.bits, 0x0001);
});

test('afterExecute() should return true', (t) => {
  const MOS6502 = t.context.MOS6502;
  t.is(t.context.MODE.afterExecute(MOS6502), true);
});

test('afterExecute() should load zero page memory from ALU', (t) => {
  let MOS6502 = t.context.MOS6502;
  MOS6502.register.pc.set(0x0000);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0x00;
  t.context.MODE.beforeExecute(MOS6502); // needed for setting this.addr
  MOS6502.register.b.set(0xAA);
  t.context.MODE.afterExecute(MOS6502);
  t.is(MOS6502.memory.main.data[0x00FF], 0xAA);
});

/* test/nellie/mos6502/modes/relative.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.MODE = require('@ellieproject/nellie/mos6502/modes/relative');
});

test('beforeExecute() should return true', (t) => {
  t.is(t.context.MODE.beforeExecute(t.context.MOS6502), true);
});

test('beforeExecute() should load next byte of program counter into ALU', (t) => {
  let MOS6502 = t.context.MOS6502;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.b.set(0x00);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  // verify the numbers are different
  t.is(MOS6502.register.b.bits, 0x00);
  t.context.MODE.beforeExecute(MOS6502);
  t.is(MOS6502.register.b.bits, 0xFF);
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
  t.is(t.context.MODE.afterExecute(t.context.MOS6502), true);
});

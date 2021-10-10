/* test/nellie/mos6502/modes/accumulator.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.MODE = require('@ellieproject/nellie/mos6502/modes/accumulator');
});

test('beforeExecute() should return true', (t) => {
  t.is(t.context.MODE.beforeExecute(t.context.MOS6502), true);
});

test('beforeExecute() should load the accumulator into the ALU', (t) => {
  let MOS6502 = t.context.MOS6502;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0x00);
  // verify the numbers are different
  t.is(MOS6502.register.a.bits, 0xFF);
  t.is(MOS6502.register.b.bits, 0x00);
  t.context.MODE.beforeExecute(MOS6502);
  // verify the numbers have loaded their new values
  t.is(MOS6502.register.a.bits, 0xFF);
  t.is(MOS6502.register.b.bits, 0xFF);
});

test('afterExecute() should return true', (t) => {
  t.is(t.context.MODE.afterExecute(t.context.MOS6502), true);
});

test('afterExecute() should load the ALU into the accumulator', (t) => {
  let MOS6502 = t.context.MOS6502;
  MOS6502.register.a.set(0x00);
  MOS6502.register.b.set(0xFF);
  // verify the numbers are different
  t.is(MOS6502.register.a.bits, 0x00);
  t.is(MOS6502.register.b.bits, 0xFF);
  t.context.MODE.afterExecute(MOS6502);
  // verify the numbers have loaded their new values
  t.is(MOS6502.register.a.bits, 0xFF);
  t.is(MOS6502.register.b.bits, 0xFF);
});

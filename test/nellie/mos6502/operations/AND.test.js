/* test/nellie/mos6502/operations/AND.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/AND');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should alter accumulator', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0xAA);
  OP.execute(MOS6502);
  t.is(MOS6502.register.a.get(), 0xAA);
});

test('execute() should set N from A', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('N', 0);
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0xAA);
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
});

test('execute() should clear N from A', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0x55);
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
});

test('execute() should set Z from A', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('Z', 0);
  MOS6502.register.a.set(0xAA); // 0b10101010
  MOS6502.register.b.set(0x55); // 0b01010101
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 1);
});

test('execute() should clear Z from A', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0x55);
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 0);
});

test('exec() INDIRECT_X mode should return this', (t) => {});

test('exec() INDIRECT_X mode should alter accumulator', (t) => {});

test('exec() INDIRECT_Y mode should return this', (t) => {});

test('exec() INDIRECT_Y mode should alter accumulator', (t) => {});

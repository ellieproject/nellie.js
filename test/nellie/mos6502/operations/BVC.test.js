/* test/nellie/mos6502/operations/BVC.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/BVC');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should alter PC when V is clear (add)', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('V', 0);
  MOS6502.register.pc.set(0x0010);
  MOS6502.register.b.set(0x20);
  OP.execute(MOS6502);
  t.is(MOS6502.register.pc.get(), 0x0030);
});

test('execute() should alter PC when V is clear (add page)', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('V', 0);
  MOS6502.register.pc.set(0x00F0);
  MOS6502.register.b.set(0x20);
  OP.execute(MOS6502);
  t.is(MOS6502.register.pc.get(), 0x0110);
});

test('execute() should alter PC when V is clear (sub)', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('V', 0);
  MOS6502.register.pc.set(0x0020);
  MOS6502.register.b.set(0xF0);
  OP.execute(MOS6502);
  t.is(MOS6502.register.pc.get(), 0x0010);
});

test('execute() should alter PC when V is clear (sub page)', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('V', 0);
  MOS6502.register.pc.set(0x0110);
  MOS6502.register.b.set(0xE0);
  OP.execute(MOS6502);
  t.is(MOS6502.register.pc.get(), 0x00F0);
});

test('execute() should not alter PC when V is set', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('V', 1);
  MOS6502.register.pc.set(0x0010);
  MOS6502.register.b.set(0x20);
  OP.execute(MOS6502);
  t.is(MOS6502.register.pc.get(), 0x0010);
});

test('exec() RELATIVE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('V', 0);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0010] = OP.mode.RELATIVE;
  MOS6502.memory.main.data[0x0011] = 0x20;
  t.is(OP.exec(OP.mode.RELATIVE, MOS6502), OP);
});

test('exec() RELATIVE mode should alter PC (clear)', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('V', 0);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0011] = 0x20;
  OP.exec(OP.mode.RELATIVE, MOS6502);
  t.is(MOS6502.register.pc.get(), 0x0031); // incremented from mode
});

test('exec() RELATIVE mode should alter PC (set)', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('V', 1);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0011] = 0x20;
  OP.exec(OP.mode.RELATIVE, MOS6502);
  t.is(MOS6502.register.pc.get(), 0x0011); // incremented from mode
});
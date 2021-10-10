/* test/nellie/mos6502/operations/BIT/index.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/BIT');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should alter B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0xAA);
  OP.execute(MOS6502);
  t.is(MOS6502.register.b.get(), 0xAA);
});

test('execute() should set N from B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('N', 0);
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0xAA);
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
});

test('execute() should clear N from B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0x55);
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
});

test('execute() should set V from B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('V', 0);
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0x55);
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('V'), 1);
});

test('execute() should clear V from B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('V', 1);
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0xAA);
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('V'), 0);
});

test('execute() should set Z from B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('Z', 0);
  MOS6502.register.a.set(0xAA); // 0b10101010
  MOS6502.register.b.set(0x55); // 0b01010101
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 1);
});

test('execute() should clear Z from B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.a.set(0xFF);
  MOS6502.register.b.set(0x55);
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 0);
});

test('run() ABSOLUTE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = OP.mode.ABSOLUTE;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0010] = MODE;
  MOS6502.memory.main.data[0x0011] = 0x02;
  MOS6502.memory.main.data[0x0012] = 0x01;
  MOS6502.memory.main.data[0x0102] = 0xAA;
  t.is(OP.run(MODE, MOS6502), OP);
});

test('run() ABSOLUTE mode should alter B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = OP.mode.ABSOLUTE;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0010] = MODE;
  MOS6502.memory.main.data[0x0011] = 0x02;
  MOS6502.memory.main.data[0x0012] = 0x01;
  MOS6502.memory.main.data[0x0102] = 0xAA;
  OP.run(MODE, MOS6502);
  t.is(MOS6502.register.b.get(), 0xAA);
});

test('run() ZERO_PAGE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = OP.mode.ZERO_PAGE;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0010] = MODE;
  MOS6502.memory.main.data[0x0011] = 0x02;
  MOS6502.memory.main.data[0x0002] = 0xAA;
  t.is(OP.run(MODE, MOS6502), OP);
});

test('run() ZERO_PAGE mode should alter B', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = OP.mode.ZERO_PAGE;
  MOS6502.register.a.set(0x0F);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0010] = MODE;
  MOS6502.memory.main.data[0x0011] = 0x02;
  MOS6502.memory.main.data[0x0012] = 0x01;
  MOS6502.memory.main.data[0x0102] = 0xAA;
  OP.run(MODE, MOS6502);
  t.is(MOS6502.register.b.get(), 0x0A);
});

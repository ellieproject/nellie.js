/* test/nellie/mos6502/operations/LDX.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/LDX');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should load X', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.b.set(0xFF);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.x.get(), 0xFF);
});

test('execute() should set N flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('N', 1); // force to 1
  MOS6502.register.b.set(0x00);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
});

test('execute() should set N flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('N', 0); // force to 0
  MOS6502.register.b.set(0xFF);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
});

test('execute() should set Z flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('Z', 1); // force to 1
  MOS6502.register.b.set(0xFF); // not 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 0);
});

test('execute() should set Z flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('Z', 0); // force to 0
  MOS6502.register.b.set(0x00); // === 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 1);
});

test('exec() ABSOLUTE_Y mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ABSOLUTE_Y, MOS6502), OP);
});

test('exec() ABSOLUTE_Y mode should load X from PC', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.y.set(0xFF);
  MOS6502.memory.main.data[0x0001] = 0x00;
  MOS6502.memory.main.data[0x0002] = 0x01;
  MOS6502.memory.main.data[0x01FF] = 0xAA;
  OP.exec(OP.mode.ABSOLUTE_Y, MOS6502);
  t.is(MOS6502.register.x.get(), 0xAA);
});

test('exec() ABSOLUTE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ABSOLUTE, MOS6502), OP);
});

test('exec() ABSOLUTE mode should load X from PC', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x0002] = 0x01;
  MOS6502.memory.main.data[0x01FF] = 0xAA;
  OP.exec(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.register.x.get(), 0xAA);
});

test('exec() IMMEDIATE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.IMMEDIATE, MOS6502), OP);
});

test('exec() IMMEDIATE mode should load X from PC', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  OP.exec(OP.mode.IMMEDIATE, MOS6502);
  t.is(MOS6502.register.x.get(), 0xFF);
});

test('exec() ZERO_PAGE_Y mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ZERO_PAGE_Y, MOS6502), OP);
});

test('exec() ZERO_PAGE_Y mode should load X from PC', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.y.set(0xFF);
  MOS6502.memory.main.data[0x0001] = 0x80;
  MOS6502.memory.main.data[0x007F] = 0xAA;
  OP.exec(OP.mode.ZERO_PAGE_Y, MOS6502);
  t.is(MOS6502.register.x.get(), 0xAA);
});

test('exec() ZERO_PAGE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ZERO_PAGE, MOS6502), OP);
});

test('exec() ZERO_PAGE mode should load X from PC', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.memory.main.data[0x0001] = 0x80;
  MOS6502.memory.main.data[0x0080] = 0xAA;
  OP.exec(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.register.x.get(), 0xAA);
});

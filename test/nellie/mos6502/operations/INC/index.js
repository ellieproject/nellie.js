/* test/nellie/mos6502/operations/INC/index.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/INC');
});

test('execute() should return true', (t) => {
  const MOS6502 = t.context.MOS6502;
  t.is(t.context.OP.execute(MOS6502), true);
});

test('execute() should increment B', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.b.set(0xFF);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.b.get(), 0x00);
});

test('execute() should set N flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('N', 1); // force to 1
  MOS6502.register.b.set(0xFF);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
});

test('execute() should set N flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('N', 0); // force to 0
  MOS6502.register.b.set(0x7F);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
});

test('execute() should set Z flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('Z', 1); // force to 1
  MOS6502.register.b.set(0x00); // not 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 0);
});

test('execute() should set Z flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('Z', 0); // force to 0
  MOS6502.register.b.set(0xFF); // === 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 1);
});

test('exec() ABSOLUTE_X mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ABSOLUTE_X, MOS6502), OP);
});

test('exec() ABSOLUTE_X mode should increment memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.x.set(0xFF);
  MOS6502.memory.main.data[0x0001] = 0x00;
  MOS6502.memory.main.data[0x0002] = 0x01;
  MOS6502.memory.main.data[0x01FF] = 0x7F;
  OP.exec(OP.mode.ABSOLUTE_X, MOS6502);
  t.is(MOS6502.memory.main.data[0x01FF], 0x80);
});

test('exec() ABSOLUTE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ABSOLUTE, MOS6502), OP);
});

test('exec() ABSOLUTE mode should increment memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x0002] = 0x01;
  MOS6502.memory.main.data[0x01FF] = 0x7F;
  OP.exec(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.memory.main.data[0x01FF], 0x80);
});

test('exec() ZERO_PAGE_X mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ZERO_PAGE_X, MOS6502), OP);
});

test('exec() ZERO_PAGE_X mode should increment memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.x.set(0x0F);
  MOS6502.memory.main.data[0x0001] = 0xF0;
  MOS6502.memory.main.data[0x00FF] = 0x7F;
  OP.exec(OP.mode.ZERO_PAGE_X, MOS6502);
  t.is(MOS6502.memory.main.data[0x00FF], 0x80);
});

test('exec() ZERO_PAGE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ZERO_PAGE, MOS6502), OP);
});

test('exec() ZERO_PAGE mode should increment memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0x7F;
  OP.exec(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.memory.main.data[0x00FF], 0x80);
});

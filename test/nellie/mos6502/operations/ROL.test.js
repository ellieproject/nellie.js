/* test/nellie/mos6502/operations/ROL.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/ROL');
});

test('execute() should return true', (t) => {
  const MOS6502 = t.context.MOS6502;
  t.is(t.context.OP.execute(MOS6502), true);
});

test('execute() should rotate B left (no carry)', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 0); // force to 0
  MOS6502.register.b.set(0b01010101);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.b.get(), 0b10101010);
});

test('execute() should rotate B left (carry)', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 1); // force to 1
  MOS6502.register.b.set(0b10101010);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.b.get(), 0b01010101);
});

test('execute() should set C flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 1); // force to 1
  MOS6502.register.b.set(0x00); // 7th bit 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('C'), 0);
});

test('execute() should set C flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 0); // force to 0
  MOS6502.register.b.set(0x80); // 7th bit 1
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('execute() should set N flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 0); // force to 0
  MOS6502.register.p.bitSet('N', 1); // force to 1
  MOS6502.register.b.set(0x00);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
});

test('execute() should set N flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 0); // force to 1
  MOS6502.register.p.bitSet('N', 0); // force to 0
  MOS6502.register.b.set(0x40);
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
  MOS6502.register.p.bitSet('C', 0); // force to 0
  MOS6502.register.p.bitSet('Z', 0); // force to 0
  MOS6502.register.b.set(0x00); // === 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 1);
});

test('run() ABSOLUTE_X mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.run(OP.mode.ABSOLUTE_X, MOS6502), OP);
});

test('run() ABSOLUTE_X mode should shift memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.x.set(0xFF);
  MOS6502.memory.main.data[0x0001] = 0x00;
  MOS6502.memory.main.data[0x0002] = 0x01;
  MOS6502.memory.main.data[0x01FF] = 0b01010101;
  OP.run(OP.mode.ABSOLUTE_X, MOS6502);
  t.is(MOS6502.memory.main.data[0x01FF], 0b10101010);
});

test('run() ABSOLUTE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.run(OP.mode.ABSOLUTE, MOS6502), OP);
});

test('run() ABSOLUTE mode should shift memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x0002] = 0x01;
  MOS6502.memory.main.data[0x01FF] = 0b01010101;
  OP.run(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.memory.main.data[0x01FF], 0b10101010);
});

test('run() ACCUMULATOR mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.run(OP.mode.ACCUMULATOR, MOS6502), OP);
});

test('run() ACCUMULATOR mode should shift memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.a.set(0b01010101);
  OP.run(OP.mode.ACCUMULATOR, MOS6502);
  t.is(MOS6502.register.a.get(), 0b10101010);
});

test('run() ZERO_PAGE_X mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.run(OP.mode.ZERO_PAGE_X, MOS6502), OP);
});

test('run() ZERO_PAGE_X mode should shift memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.x.set(0x0F);
  MOS6502.memory.main.data[0x0001] = 0xF0;
  MOS6502.memory.main.data[0x00FF] = 0b01010101;
  OP.run(OP.mode.ZERO_PAGE_X, MOS6502);
  t.is(MOS6502.memory.main.data[0x00FF], 0b10101010);
});

test('run() ZERO_PAGE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.run(OP.mode.ZERO_PAGE, MOS6502), OP);
});

test('run() ZERO_PAGE mode should shift memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0b01010101;
  OP.run(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.memory.main.data[0x00FF], 0b10101010);
});

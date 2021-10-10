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

test('run() ABSOLUTE_X mode should return this', (t) => {});

test('run() ABSOLUTE_X mode should alter accumulator', (t) => {});

test('run() ABSOLUTE_Y mode should return this', (t) => {});

test('run() ABSOLUTE_Y mode should alter accumulator', (t) => {});

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

test('run() ABSOLUTE mode should alter accumulator', (t) => {
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
  t.is(MOS6502.register.a.get(), 0xAA);
});

test('run() IMMEDIATE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = OP.mode.IMMEDIATE;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0010] = MODE;
  MOS6502.memory.main.data[0x0011] = 0xAA;
  t.is(OP.run(MODE, MOS6502), OP);
});

test('run() IMMEDIATE mode should alter accumulator', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = OP.mode.IMMEDIATE;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0010] = MODE;
  MOS6502.memory.main.data[0x0011] = 0xAA;
  OP.run(MODE, MOS6502);
  t.is(MOS6502.register.a.get(), 0xAA);
});

test('run() INDIRECT_X mode should return this', (t) => {});

test('run() INDIRECT_X mode should alter accumulator', (t) => {});

test('run() INDIRECT_Y mode should return this', (t) => {});

test('run() INDIRECT_Y mode should alter accumulator', (t) => {});

test('run() ZERO_PAGE_X mode should return this', (t) => {});

test('run() ZERO_PAGE_X mode should alter accumulator', (t) => {});

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

test('run() ZERO_PAGE mode should alter accumulator', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = OP.mode.ZERO_PAGE;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.pc.set(0x0010);
  MOS6502.memory.main.data[0x0010] = MODE;
  MOS6502.memory.main.data[0x0011] = 0x02;
  MOS6502.memory.main.data[0x0012] = 0x01;
  MOS6502.memory.main.data[0x0102] = 0xAA;
  OP.run(MODE, MOS6502);
  t.is(MOS6502.register.a.get(), 0xAA);
});

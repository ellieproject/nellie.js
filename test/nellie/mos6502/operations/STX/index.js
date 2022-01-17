/* test/nellie/mos6502/operations/STX/index.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/STX');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should store X', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.x.set(0xFF);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.b.get(), 0xFF);
});

test('exec() ABSOLUTE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ABSOLUTE, MOS6502), OP);
});

test('exec() ABSOLUTE mode should store X to Memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.x.set(0xAA);
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x0002] = 0x01;
  MOS6502.memory.main.data[0x01FF] = 0x00;
  OP.exec(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.memory.main.data[0x01FF], 0xAA);
});

test('exec() ZERO_PAGE_Y mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ZERO_PAGE_Y, MOS6502), OP);
});

test('exec() ZERO_PAGE_Y mode should store X to Memory', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.x.set(0xAA);
  MOS6502.register.y.set(0xFF);
  MOS6502.memory.main.data[0x0001] = 0x80;
  MOS6502.memory.main.data[0x007F] = 0x00;
  OP.exec(OP.mode.ZERO_PAGE_Y, MOS6502);
  t.is(MOS6502.memory.main.data[0x007F], 0xAA);
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
  MOS6502.register.x.set(0xAA);
  MOS6502.memory.main.data[0x0001] = 0x80;
  MOS6502.memory.main.data[0x0080] = 0x00;
  OP.exec(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.memory.main.data[0x0080], 0xAA);
});

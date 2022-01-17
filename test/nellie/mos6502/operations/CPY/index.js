/* test/nellie/mos6502/operations/CPY/index.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/CPY');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should set N flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('N', 1); // force to 1
  MOS6502.register.y.set(0x80);
  MOS6502.register.b.set(0x01);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
});

test('execute() should set N flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('N', 0); // force to 0
  MOS6502.register.y.set(0x00);
  MOS6502.register.b.set(0x01);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
});

test('execute() should set Z flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('Z', 1); // force to 1
  MOS6502.register.y.set(0x00);
  MOS6502.register.b.set(0x01);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 0);
});

test('execute() should set Z flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('Z', 0); // force to 0
  MOS6502.register.y.set(0x80);
  MOS6502.register.b.set(0x80);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 1);
});

test('execute() should set C flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 1); // force to 1
  MOS6502.register.y.set(0x7F);
  MOS6502.register.b.set(0x80);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('C'), 0);
});

test('execute() should set C flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 0); // force to 0
  MOS6502.register.y.set(0x80);
  MOS6502.register.b.set(0x01);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() ABSOLUTE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ABSOLUTE, MOS6502), OP);
});

test('exec() ABSOLUTE mode should set N=0, Z=0, C=0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 1);
  MOS6502.register.y.set(0x40); // X < M
  MOS6502.memory.main.data[0x0001] = 0x01;
  MOS6502.memory.main.data[0x0002] = 0x02;
  MOS6502.memory.main.data[0x0201] = 0xFF;
  OP.exec(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 0);
});

test('exec() ABSOLUTE mode should set N=0, Z=0, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0x01); // X < M
  MOS6502.memory.main.data[0x0001] = 0x01;
  MOS6502.memory.main.data[0x0002] = 0x02;
  MOS6502.memory.main.data[0x0201] = 0x00;
  OP.exec(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() ABSOLUTE mode should set N=0, Z=1, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 0);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0x00); // X < M
  MOS6502.memory.main.data[0x0001] = 0x01;
  MOS6502.memory.main.data[0x0002] = 0x02;
  MOS6502.memory.main.data[0x0201] = 0x00;
  OP.exec(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 1);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() ABSOLUTE mode should set N=1, Z=0, C=0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 0);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 1);
  MOS6502.register.y.set(0x80); // X < M
  MOS6502.memory.main.data[0x0001] = 0x01;
  MOS6502.memory.main.data[0x0002] = 0x02;
  MOS6502.memory.main.data[0x0201] = 0xFF;
  OP.exec(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 0);
});

test('exec() ABSOLUTE mode should set N=1, Z=0, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 0);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0xFF); // X < M
  MOS6502.memory.main.data[0x0001] = 0x01;
  MOS6502.memory.main.data[0x0002] = 0x02;
  MOS6502.memory.main.data[0x0201] = 0x40;
  OP.exec(OP.mode.ABSOLUTE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() IMMEDIATE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.IMMEDIATE, MOS6502), OP);
});

test('exec() IMMEDIATE mode should set N=0, Z=0, C=0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 1);
  MOS6502.register.y.set(0x40); // X < M
  MOS6502.memory.main.data[0x0001] = 0xFF;
  OP.exec(OP.mode.IMMEDIATE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 0);
});

test('exec() IMMEDIATE mode should set N=0, Z=0, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0x01); // X < M
  MOS6502.memory.main.data[0x0001] = 0x00;
  OP.exec(OP.mode.IMMEDIATE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() IMMEDIATE mode should set N=0, Z=1, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 0);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0x00); // X < M
  MOS6502.memory.main.data[0x0001] = 0x00;
  OP.exec(OP.mode.IMMEDIATE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 1);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() IMMEDIATE mode should set N=1, Z=0, C=0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 0);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 1);
  MOS6502.register.y.set(0x80); // X < M
  MOS6502.memory.main.data[0x0001] = 0xFF;
  OP.exec(OP.mode.IMMEDIATE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 0);
});

test('exec() IMMEDIATE mode should set N=1, Z=0, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 0);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0xFF); // X < M
  MOS6502.memory.main.data[0x0001] = 0x40;
  OP.exec(OP.mode.IMMEDIATE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() ZERO_PAGE mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.ZERO_PAGE, MOS6502), OP);
});

test('exec() ZERO_PAGE mode should set N=0, Z=0, C=0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 1);
  MOS6502.register.y.set(0x40); // X < M
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0xFF;
  OP.exec(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 0);
});

test('exec() ZERO_PAGE mode should set N=0, Z=0, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0x01); // X < M
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0x00;
  OP.exec(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() ZERO_PAGE mode should set N=0, Z=1, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 1);
  MOS6502.register.p.bitSet('Z', 0);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0x00); // X < M
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0x00;
  OP.exec(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
  t.is(MOS6502.register.p.bit('Z'), 1);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() ZERO_PAGE mode should set N=1, Z=0, C=0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 0);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 1);
  MOS6502.register.y.set(0x80); // X < M
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0xFF;
  OP.exec(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 0);
});

test('exec() ZERO_PAGE mode should set N=1, Z=0, C=1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.pc.set(0x0000);
  MOS6502.register.p.bitSet('N', 0);
  MOS6502.register.p.bitSet('Z', 1);
  MOS6502.register.p.bitSet('C', 0);
  MOS6502.register.y.set(0xFF); // X < M
  MOS6502.memory.main.data[0x0001] = 0xFF;
  MOS6502.memory.main.data[0x00FF] = 0x40;
  OP.exec(OP.mode.ZERO_PAGE, MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
  t.is(MOS6502.register.p.bit('Z'), 0);
  t.is(MOS6502.register.p.bit('C'), 1);
});

/* test/nellie/mos6502/operations/TYA.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP      = require('@ellieproject/nellie/mos6502/operations/TYA');
});

test('execute() should return true', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  t.is(OP.execute(MOS6502), true);
});

test('execute() should set A from Y', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.y.set(0xFF);
  MOS6502.register.a.set(0x00);
  OP.execute(MOS6502);
  t.is(MOS6502.register.a.get(), 0xFF);
  t.is(MOS6502.register.y.get(), 0xFF);
});

test('execute() should set N flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('N', 1); // force to 1
  MOS6502.register.y.set(0x00); // 7th bit 0
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
});

test('execute() should set N flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('N', 0); // force to 0
  MOS6502.register.y.set(0xF0); // 7th bit 1
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
});

test('execute() should set Z flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('Z', 1); // force to 1
  MOS6502.register.y.set(0xFF); // not 0
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 0);
});

test('execute() should set Z flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.bitSet('Z', 0); // force to 0
  MOS6502.register.y.set(0x00); // === 0
  OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 1);
});

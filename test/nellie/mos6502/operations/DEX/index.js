/* test/nellie/mos6502/operations/DEX/index.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/DEX');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should decrement Y', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.x.set(0x01);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.x.get(), 0x00);
});

test('execute() should set N flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('N', 1); // force to 1
  MOS6502.register.x.set(0x01);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 0);
});

test('execute() should set N flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('N', 0); // force to 0
  MOS6502.register.x.set(0xF0);
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('N'), 1);
});

test('execute() should set Z flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('Z', 1); // force to 1
  MOS6502.register.x.set(0xF0); // not 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 0);
});

test('execute() should set Z flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('Z', 0); // force to 0
  MOS6502.register.x.set(0x01); // === 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('Z'), 1);
});

test('run() IMPLIED mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.run(OP.mode.IMPLIED, MOS6502), OP);
});

test('run() IMPLIED mode should decrement Y', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.x.set(0x01);
  OP.run(OP.mode.IMPLIED, MOS6502);
  t.is(MOS6502.register.x.get(), 0x00);
});

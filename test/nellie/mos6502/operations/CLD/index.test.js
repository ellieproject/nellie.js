/* test/nellie/mos6502/operations/CLD/index.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/CLD');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should set D flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('D', 1); // force to 1
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('D'), 0);
});

test('run() IMPLIED mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.run(OP.mode.IMPLIED, MOS6502), OP);
});

test('run() IMPLIED mode should set D flag to 0', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  MOS6502.register.p.bitSet('D', 1); // force to 1
  OP.run(OP.mode.IMPLIED, MOS6502);
  t.is(MOS6502.register.p.bit('D'), 0);
});

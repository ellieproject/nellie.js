/* test/nellie/mos6502/operations/SEC/index.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/SEC');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('execute() should set C flag to 1', (t) => {
  const MOS6502 = t.context.MOS6502;
  MOS6502.register.p.bitSet('C', 0); // force to 0
  t.context.OP.execute(MOS6502);
  t.is(MOS6502.register.p.bit('C'), 1);
});

test('exec() IMPLIED mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.IMPLIED, MOS6502), OP);
});

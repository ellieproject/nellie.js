/* test/nellie/mos6502/operations/CLV.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/CLV');
});

test('execute() should return true', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  t.is(OP.execute(MOS6502), true);
});

test('execute() should set V flag to 0 without side effects', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  MOS6502.register.p.set(0b00000000);
  MOS6502.register.p.bitSet('V', 1); // force to 1
  OP.execute(MOS6502);
  // clears the I flag
  t.is(MOS6502.register.p.bit('V'), 0);
  // without side effects
  t.is(MOS6502.register.p.get(), 0b00000000);
});

/* test/nellie/mos6502/operations/NOP/index.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/NOP');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

test('exec() IMPLIED mode should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP = t.context.OP;
  t.is(OP.exec(OP.mode.IMPLIED, MOS6502), OP);
});

/* test/nellie/mos6502/operations/BRK/index.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP = require('@ellieproject/nellie/mos6502/operations/BRK');
});

test('execute() should return true', (t) => {
  t.is(t.context.OP.execute(t.context.MOS6502), true);
});

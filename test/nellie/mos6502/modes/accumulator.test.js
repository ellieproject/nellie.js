/* test/nellie/mos6502/modes/accumulator.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.MODE = require('@ellieproject/nellie/mos6502/modes/accumulator');
});

test('beforeExecute() should return true', (t) => {
  t.is(t.context.MODE.beforeExecute(null, t.context.MOS6502), true);
});

test('beforeExecute() should prime register.b', (t) => {
  t.fail();
});

test('afterExecute() should return true', (t) => {
  t.is(t.context.MODE.afterExecute(null, t.context.MOS6502), true);
});

test('afterExecute() should prime register.b', (t) => {
  t.fail();
});

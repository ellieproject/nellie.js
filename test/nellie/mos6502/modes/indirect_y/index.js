/* test/nellie/mos6502/modes/indirect_y/index.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MODE = require('@ellieproject/nellie/mos6502/modes/indirect_y');
});

test('beforeExecute() should return true', (t) => {
  t.is(t.context.MODE.beforeExecute(), true);
});

test('beforeExecute() should prime register.b', (t) => {
  t.fail();
});

test('afterExecute() should return true', (t) => {
  t.is(t.context.MODE.afterExecute(), true);
});

test('afterExecute() should prime register.b', (t) => {
  t.fail();
});

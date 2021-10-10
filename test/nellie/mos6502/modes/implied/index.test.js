/* test/nellie/mos6502/modes/implied/index.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MODE = require('@ellieproject/nellie/mos6502/modes/implied');
});

/* IMPLIED mode is unique, as it will be the only mode that does
 * nothing by default. There is no need to test for no change,
 * although that could be worth trying to do down the road for
 * better unit testing.
 *
 * TODO: use snapshots to test for before()/after() that does nothing
 */

test('beforeExecute() should return true', (t) => {
  t.is(t.context.MODE.beforeExecute(), true);
});

test('afterExecute() should return true', (t) => {
  t.is(t.context.MODE.afterExecute(), true);
});

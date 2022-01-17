/* test/nellie/mos6502/clock/index.test.js
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
});

test('TYA IMPLIED should exec in two ticks', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = MOS6502.operation.TYA;
  const MODE    = OP.mode.IMPLIED;
  const TICKS   = BigInt(2);
  MOS6502.clock.start();
  let count     = MOS6502.clock.count;
  t.is(OP.exec(MODE, MOS6502), OP);
  t.is(count + TICKS, MOS6502.clock.count);
});

test('TYA IMPLIED should exec in real time', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = MOS6502.operation.TYA;
  const MODE    = OP.mode.IMPLIED;
  const TICKS   = 2;
  MOS6502.clock.start();
  let start   = MOS6502.clock.last;
  t.is(OP.exec(MODE, MOS6502), OP);
  t.true((MOS6502.clock.last - start) < BigInt(559 * TICKS), `Took ${MOS6502.clock.last - start} ns. Expected: ${559 * TICKS} ns`);
});

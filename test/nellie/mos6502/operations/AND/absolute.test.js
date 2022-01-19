/* test/nellie/mos6502/operations/AND/absolute.test.js
 *
 * tests for the ABSOLUTE mode of the AND operation
 * mode tests should include:
 *   - exec(MODE...) should return this
 *   - exec(MODE...) should [operation effect]
 *   - MOS6502.execPC() should increment clock by [time]
 *
 */

const test = require('ava');

test.beforeEach((t) => {
  t.context.MOS6502 = require('@ellieproject/nellie/mos6502');
  t.context.OP      = require('@ellieproject/nellie/mos6502/operations/AND');
  t.context.MODE    = t.context.OP.mode.ABSOLUTE; // this is an opcode
});

// sets accumulator to 0xFF (can AND with anything)
// initializes the PC to 0x0010
// sets up an ABSOLUTE AND (memory address: 0x0102)
// sets memory 0x0102 to value 0xAA
//
// this will cause AND to set accumulator to 0xAA
function setup_0x0102(t) {
  const MOS6502 = t.context.MOS6502;
  const MODE    = t.context.MODE;
  MOS6502.register.a.set(0xFF);
  MOS6502.register.pc.set(0x0010);       // set the PC to a known position
  MOS6502.memory.main.set(0x0010, MODE); // set this memory address to opcode
  MOS6502.memory.main.set(0x0011, 0x02); // low byte
  MOS6502.memory.main.set(0x0012, 0x01); // high byte
  MOS6502.memory.main.set(0x0102, 0xAA); // lookup
}

test('exec(ABSOLUTE...) should return this', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = t.context.MODE;
  setup_0x0102(t);
  t.is(OP.exec(MODE, MOS6502), OP);
});

test('exec(ABSOLUTE...) should alter accumulator', (t) => {
  const MOS6502 = t.context.MOS6502;
  const OP      = t.context.OP;
  const MODE    = t.context.MODE;
  setup_0x0102(t);
  OP.exec(MODE, MOS6502);
  t.is(MOS6502.register.a.get(), 0xAA);
});

test('MOS6502.execPC() should increment clock by 4', (t) => {
  const MOS6502 = t.context.MOS6502;
  setup_0x0102(t);
  MOS6502.clock.count = 0; // set the clock to a known position
  MOS6502.execPC();        // no arguments needed, comes from PC
  t.is(MOS6502.clock.count, 4);
});

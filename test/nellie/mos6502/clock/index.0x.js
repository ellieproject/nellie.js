/* test/nellie/mos6502/clock/index.0x.js
 *
 */

const MOS6502 = require('@ellieproject/nellie/mos6502');
const OP      = MOS6502.operation.TYA;
const MODE    = OP.mode.IMPLIED;
const TICKS   = 2;
MOS6502.clock.start();
let start   = MOS6502.clock.last;
OP.run(MODE, MOS6502), OP;
MOS6502.clock.start();
start = MOS6502.clock.last;
OP.run(MODE, MOS6502), OP;

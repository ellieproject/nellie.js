/* nellie/mos6502/index.js
 *
 */

const Ellie = require('@ellieproject/ellie');

const MOS6502 = new Ellie.Processor('6502');

// Opcodes
MOS6502.MODES   = require('@ellieproject/nellie/mos6502/modes');
MOS6502.OPCODES = require('@ellieproject/nellie/mos6502/operations');

for (const name in MOS6502.OPCODES) {
  MOS6502.addOperation(MOS6502.OPCODES[name]);
}

// Memory
const MEM_main = new Ellie.Memory('main', 'Main Memory',      Uint8Array, 0x10000);

const MEM_MIRROR_ram = new Ellie.Memory.Mirror(0x0000, 0x0800, 0x0800, 0x1800); // 0x0000 <-> 0x1FFF
const MEM_MIRROR_ppu = new Ellie.Memory.Mirror(0x2000, 0x0008, 0x2008, 0x1FF8); // 0x2000 <-> 0x3FFF

MEM_main.mirror(MEM_MIRROR_ram);
MEM_main.mirror(MEM_MIRROR_ppu);

MOS6502.addMemory(MEM_main);

// Registers
const REG_buffer         = new Ellie.Register('b',  'ALU Buffer',       8, 0x00);
const REG_programCounter = new Ellie.Register('pc', 'Program Counter', 16, 0x0000);
const REG_memoryAddress  = new Ellie.Register('ma', 'Memory Address',  16, 0x0000);
const REG_registerA      = new Ellie.Register('a',  'Accumulator',      8, 0x00);
const REG_registerX      = new Ellie.Register('x',  'Register X',       8, 0x00);
const REG_registerY      = new Ellie.Register('y',  'Register Y',       8, 0x00);
const REG_status         = new Ellie.Register('p',  'Status',           8, 0x34);

REG_status.alias(7, 'N').alias(7, 'negative');
REG_status.alias(6, 'V').alias(6, 'overflow');
REG_status.alias(5, '1').alias(5, 'always one');
REG_status.alias(4, 'B').alias(4, 'break');
REG_status.alias(3, 'D').alias(3, 'decimal');
REG_status.alias(2, 'I').alias(2, 'interrupt');
REG_status.alias(1, 'Z').alias(1, 'zero');
REG_status.alias(0, 'C').alias(0, 'carry');

MOS6502.addRegister(REG_buffer);
MOS6502.addRegister(REG_programCounter);
MOS6502.addRegister(REG_memoryAddress);
MOS6502.addRegister(REG_registerA);
MOS6502.addRegister(REG_registerX);
MOS6502.addRegister(REG_registerY);
MOS6502.addRegister(REG_status);

MOS6502.runTick = function*() {
  // TODO remove: temp setup
  this.memory.main.set(0xFFFD, 0x80);
  this.memory.main.set(0xFFFC, 0x00);
  this.memory.main.set(0x8000, MOS6502.OPCODES.NOP.mode[MOS6502.MODES.IMPLIED.name]);
  this.memory.main.set(0x8001, MOS6502.OPCODES.BCC.mode[MOS6502.MODES.RELATIVE.name]);
  this.memory.main.set(0x8002, 0xFD);
  // normal operation from here
  this.register.pc.set((this.memory.main.get(0xFFFD) << 8) + this.memory.main.get(0xFFFC));
  while (true) {
    let opcode = this.memory.main.get(this.register.pc.get());
    console.log(this.register.pc.toString(), '0x' + opcode.toString(16), this.instruction[opcode].toString());
    yield* this.execTick(opcode);
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < 1000);
    this.register.pc.inc();
  }
};

// Clocks

// exactly 60 fps * 341 horizontal pixels * 262 rows = 5,360,520 Hz (PPU)
// 5,360,520 Hz / 3 (CPU ticks 4 times for every 12 PPU ticks) = 1,786,840 Hz
// this is not a perfect emulation of the real NES, which is around 0.1% faster
// rather, this adjustment to the clock is for my sanity :)
MOS6502.clock = new Ellie.Processor.Clock(MOS6502, 1_786_840); // 1.78 MHz

//MOS6502.clock.runSynchronous();

module.exports = MOS6502;

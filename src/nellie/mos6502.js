/* nellie/mos6502.js
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
const MEM_Main = new Ellie.Memory('main', 'Main Memory',      Uint8Array, 0x10000);
const MEM_RAM  = new Ellie.Memory('ram',  'Internal RAM',     Uint8Array, 0x0800, MEM_Main, 0x0000);
const MEM_PPU  = new Ellie.Memory('ppu',  'PPU Registers',    Uint8Array, 0x0008, MEM_Main, 0x2000);
const MEM_APU  = new Ellie.Memory('apu',  'APU/IO Registers', Uint8Array, 0x0018, MEM_Main, 0x4000);
const MEM_APUX = new Ellie.Memory('apux', 'APU.IO Extended',  Uint8Array, 0x0008, MEM_Main, 0x4018);
const MEM_Cart = new Ellie.Memory('cart', 'Cartridge Space',  Uint8Array, 0xBFE0, MEM_Main, 0x4020);

MOS6502.addMemory(MEM_Main);
MOS6502.addMemory(MEM_RAM);
MOS6502.addMemory(MEM_PPU);
MOS6502.addMemory(MEM_APU);
MOS6502.addMemory(MEM_APUX);
MOS6502.addMemory(MEM_Cart);

// Registers
const REG_Buffer         = new Ellie.Register('b',  'ALU Buffer',       8, 0x00);
const REG_ProgramCounter = new Ellie.Register('pc', 'Program Counter', 16, 0x0000);
const REG_RegisterA      = new Ellie.Register('a',  'Accumulator',      8, 0x00);
const REG_RegisterX      = new Ellie.Register('x',  'Register X',       8, 0x00);
const REG_RegisterY      = new Ellie.Register('y',  'Register Y',       8, 0x00);
const REG_Status         = new Ellie.Register('p',  'Status',           8, 0x34);

REG_Status.alias(7, 'N').alias(7, 'negative');
REG_Status.alias(6, 'V').alias(6, 'overflow');
REG_Status.alias(5, '1').alias(5, 'always one');
REG_Status.alias(4, 'B').alias(4, 'break');
REG_Status.alias(3, 'D').alias(3, 'decimal');
REG_Status.alias(2, 'I').alias(2, 'interrupt');
REG_Status.alias(1, 'Z').alias(1, 'zero');
REG_Status.alias(0, 'C').alias(0, 'carry');

MOS6502.addRegister(REG_Buffer);
MOS6502.addRegister(REG_ProgramCounter);
MOS6502.addRegister(REG_RegisterA);
MOS6502.addRegister(REG_RegisterX);
MOS6502.addRegister(REG_RegisterY);
MOS6502.addRegister(REG_Status);

module.exports = MOS6502;

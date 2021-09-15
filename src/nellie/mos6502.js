/* nellie/cpu6502.js
 *
 */

const Ellie = require('@ellieproject/ellie');

const MOS6502 = new Ellie.Processor('6502');

// Opcodes
// TODO should I move opcodes.js to here?
MOS6502.OPCODES = require('./mos6502/opcodes.js');

for (const name in MOS6502.OPCODES) {
  MOS6502.addOpcode(MOS6502.OPCODES[name]);
}

// Registers
const Status    = new Ellie.Register('Status',      8, 0x34);
const RegisterA = new Ellie.Register('Accumulator', 8, 0x00);
const RegisterX = new Ellie.Register('Register X',  8, 0x00);
const RegisterY = new Ellie.Register('Register Y',  8, 0x00);

Status.nameBit(7, 'n').nameBit(7, 'N').nameBit(7, 'negative');
Status.nameBit(6, 'v').nameBit(6, 'V').nameBit(6, 'overflow');
Status.nameBit(5, '1').nameBit(5, '1').nameBit(5, 'always one');
Status.nameBit(4, 'b').nameBit(4, 'B').nameBit(4, 'break');
Status.nameBit(3, 'd').nameBit(3, 'D').nameBit(3, 'decimal');
Status.nameBit(2, 'i').nameBit(2, 'I').nameBit(2, 'interrupt');
Status.nameBit(1, 'z').nameBit(1, 'Z').nameBit(1, 'zero');
Status.nameBit(0, 'c').nameBit(0, 'C').nameBit(0, 'carry');

MOS6502.addRegister(Status,    'p');
MOS6502.addRegister(RegisterA, 'a');
MOS6502.addRegister(RegisterX, 'x');
MOS6502.addRegister(RegisterY, 'y');

//MOS6502.run(0x98).run(0x8A).run(0xA8).run(0xAA);
MOS6502.run(0x38); // SEC
MOS6502.run(0x2A); // ROL A
MOS6502.run(0xAA); // TAX
MOS6502.run(0x6A); // ROR A
MOS6502.run(0x6A);
MOS6502.run(0xA8); // TAY

for (var reg in MOS6502.register) {
  console.log(MOS6502.register[reg].toString());
}

module.exports = MOS6502;

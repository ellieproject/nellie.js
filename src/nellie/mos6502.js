/* nellie/mos6502.js
 *
 */

const Ellie = require('@ellieproject/ellie');

const MOS6502 = new Ellie.Processor('6502');

// Opcodes
MOS6502.MODES   = require('@ellieproject/nellie/mos6502/modes');
MOS6502.OPCODES = require('@ellieproject/nellie/mos6502/opcodes');

for (const name in MOS6502.OPCODES) {
  MOS6502.addOperation(MOS6502.OPCODES[name]);
}

// Registers
const Buffer    = new Ellie.Register('b', 'ALU Buffer',  8, 0x00);
const Status    = new Ellie.Register('p', 'Status',      8, 0x34);
const RegisterA = new Ellie.Register('a', 'Accumulator', 8, 0x00);
const RegisterX = new Ellie.Register('x', 'Register X',  8, 0x00);
const RegisterY = new Ellie.Register('y', 'Register Y',  8, 0x00);

Status.alias(7, 'N').alias(7, 'negative');
Status.alias(6, 'V').alias(6, 'overflow');
Status.alias(5, '1').alias(5, 'always one');
Status.alias(4, 'B').alias(4, 'break');
Status.alias(3, 'D').alias(3, 'decimal');
Status.alias(2, 'I').alias(2, 'interrupt');
Status.alias(1, 'Z').alias(1, 'zero');
Status.alias(0, 'C').alias(0, 'carry');

MOS6502.addRegister(Buffer);
MOS6502.addRegister(Status);
MOS6502.addRegister(RegisterA);
MOS6502.addRegister(RegisterX);
MOS6502.addRegister(RegisterY);

module.exports = MOS6502;

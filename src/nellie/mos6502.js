/* nellie/mos6502.js
 *
 */

const Ellie = require('@ellieproject/ellie');

const MOS6502 = new Ellie.Processor('6502');

// Opcodes
// TODO should I move opcodes.js to here?
MOS6502.OPCODES = require('@ellieproject/nellie/mos6502/opcodes');

for (const name in MOS6502.OPCODES) {
  MOS6502.addOpcode(MOS6502.OPCODES[name]);
}

// Registers
const Buffer    = new Ellie.Register('ALU Buffer',  8, 0x00);
const Status    = new Ellie.Register('Status',      8, 0x34);
const RegisterA = new Ellie.Register('Accumulator', 8, 0x00);
const RegisterX = new Ellie.Register('Register X',  8, 0x00);
const RegisterY = new Ellie.Register('Register Y',  8, 0x00);

Status.alias(7, 'N').alias(7, 'negative');
Status.alias(6, 'V').alias(6, 'overflow');
Status.alias(5, '1').alias(5, 'always one');
Status.alias(4, 'B').alias(4, 'break');
Status.alias(3, 'D').alias(3, 'decimal');
Status.alias(2, 'I').alias(2, 'interrupt');
Status.alias(1, 'Z').alias(1, 'zero');
Status.alias(0, 'C').alias(0, 'carry');

MOS6502.addRegister(Buffer,    'b');
MOS6502.addRegister(Status,    'p');
MOS6502.addRegister(RegisterA, 'a');
MOS6502.addRegister(RegisterX, 'x');
MOS6502.addRegister(RegisterY, 'y');

module.exports = MOS6502;

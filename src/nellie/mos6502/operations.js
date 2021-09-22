/* nellie/mos6502/opcodes.js
 *
 */

const OPCODES = {
  ADC: require('@ellieproject/nellie/mos6502/opcodes/ADC'), // Add M to A with Carry
  AND: require('@ellieproject/nellie/mos6502/opcodes/AND'), // "AND" M with A
  ASL: require('@ellieproject/nellie/mos6502/opcodes/ASL'), // Shift Left One Bit (M or A)
  BCC: require('@ellieproject/nellie/mos6502/opcodes/BCC'), // Branch on Carry Clear
  BCS: require('@ellieproject/nellie/mos6502/opcodes/BCS'), // Branch on Carry Set
  BEQ: require('@ellieproject/nellie/mos6502/opcodes/BEQ'), // Branch on Result Zero
  BIT: require('@ellieproject/nellie/mos6502/opcodes/BIT'), // Test Bits in M with A
  BMI: require('@ellieproject/nellie/mos6502/opcodes/BMI'), // Branch on Result Minus
  BNE: require('@ellieproject/nellie/mos6502/opcodes/BNE'), // Branch on Result not Zero
  BPL: require('@ellieproject/nellie/mos6502/opcodes/BPL'), // Branch on Result Plus
  BRK: require('@ellieproject/nellie/mos6502/opcodes/BRK'), // Force Break
  BVC: require('@ellieproject/nellie/mos6502/opcodes/BVC'), // Branch on Overflow Clear
  BVS: require('@ellieproject/nellie/mos6502/opcodes/BVS'), // Branch on Overflow Set
  CLC: require('@ellieproject/nellie/mos6502/opcodes/CLC'), // Clear Carry Flag
  CLD: require('@ellieproject/nellie/mos6502/opcodes/CLD'), // Clear Decimal Mode
  CLI: require('@ellieproject/nellie/mos6502/opcodes/CLI'), // Clear Interrupt Disable Flag
  CLV: require('@ellieproject/nellie/mos6502/opcodes/CLV'), // Clear Overflow Flag
  CMP: require('@ellieproject/nellie/mos6502/opcodes/CMP'), // Compare M and A
  CPX: require('@ellieproject/nellie/mos6502/opcodes/CPX'), // Compare M and X
  CPY: require('@ellieproject/nellie/mos6502/opcodes/CPY'), // Compare M and Y
  DEC: require('@ellieproject/nellie/mos6502/opcodes/DEC'), // Decrement M by One
  DEX: require('@ellieproject/nellie/mos6502/opcodes/DEX'), // Decrement X by One
  DEY: require('@ellieproject/nellie/mos6502/opcodes/DEY'), // Decrement Y by One
  EOR: require('@ellieproject/nellie/mos6502/opcodes/EOR'), // "Exclusive-Or" M with A
  INC: require('@ellieproject/nellie/mos6502/opcodes/INC'), // Increment M by One
  INX: require('@ellieproject/nellie/mos6502/opcodes/INX'), // Increment X by One
  INY: require('@ellieproject/nellie/mos6502/opcodes/INY'), // Increment Y by One
  JMP: require('@ellieproject/nellie/mos6502/opcodes/JMP'), // Jump to Location
  JSR: require('@ellieproject/nellie/mos6502/opcodes/JSR'), // Jump to Location Save Return Address
  LDA: require('@ellieproject/nellie/mos6502/opcodes/LDA'), // Load A with M
  LDX: require('@ellieproject/nellie/mos6502/opcodes/LDX'), // Load X with M
  LDY: require('@ellieproject/nellie/mos6502/opcodes/LDY'), // Load Y with M
  LSR: require('@ellieproject/nellie/mos6502/opcodes/LSR'), // Shift Right One Bit (M or A)
  NOP: require('@ellieproject/nellie/mos6502/opcodes/NOP'), // No Operation
  ORA: require('@ellieproject/nellie/mos6502/opcodes/ORA'), // "OR" M with A
  PHA: require('@ellieproject/nellie/mos6502/opcodes/PHA'), // Push A on Stack
  PHP: require('@ellieproject/nellie/mos6502/opcodes/PHP'), // Push Processor Status on Stack
  PLA: require('@ellieproject/nellie/mos6502/opcodes/PLA'), // Pull A from Stack
  PLP: require('@ellieproject/nellie/mos6502/opcodes/PLP'), // Pull Processor Status from Stack
  ROL: require('@ellieproject/nellie/mos6502/opcodes/ROL'), // Rotate One Bit Left (M or A)
  ROR: require('@ellieproject/nellie/mos6502/opcodes/ROR'), // Rotate One Bit Right (M or A)
  RTI: require('@ellieproject/nellie/mos6502/opcodes/RTI'), // Return from Interrupt
  RTS: require('@ellieproject/nellie/mos6502/opcodes/RTS'), // Return from Subroutine
  SBC: require('@ellieproject/nellie/mos6502/opcodes/SBC'), // Subtract M from A with Borrow
  SEC: require('@ellieproject/nellie/mos6502/opcodes/SEC'), // Set Carry Flag
  SED: require('@ellieproject/nellie/mos6502/opcodes/SED'), // Set Decimal Mode
  SEI: require('@ellieproject/nellie/mos6502/opcodes/SEI'), // Set Interrupt Disable Status
  STA: require('@ellieproject/nellie/mos6502/opcodes/STA'), // Store A in M
  STX: require('@ellieproject/nellie/mos6502/opcodes/STX'), // Store X in M
  STY: require('@ellieproject/nellie/mos6502/opcodes/STY'), // Store Y in M
  TAX: require('@ellieproject/nellie/mos6502/opcodes/TAX'), // Transfer A to X
  TAY: require('@ellieproject/nellie/mos6502/opcodes/TAY'), // Transfer A to Y
  TSX: require('@ellieproject/nellie/mos6502/opcodes/TSX'), // Transfer Stack Pointer to X
  TXA: require('@ellieproject/nellie/mos6502/opcodes/TXA'), // Transfer X to A
  TXS: require('@ellieproject/nellie/mos6502/opcodes/TXS'), // Transfer X to Stack Pointer
  TYA: require('@ellieproject/nellie/mos6502/opcodes/TYA'), // Transfer Y to A
};

module.exports = OPCODES;

/* nellie/mos6502/operations/index.js
 *
 */

const OPCODES = {
  ADC: require('@ellieproject/nellie/mos6502/operations/ADC'), // Add M to A with Carry
  AND: require('@ellieproject/nellie/mos6502/operations/AND'), // "AND" M with A
  ASL: require('@ellieproject/nellie/mos6502/operations/ASL'), // Shift Left One Bit (M or A)
  BCC: require('@ellieproject/nellie/mos6502/operations/BCC'), // Branch on Carry Clear
  BCS: require('@ellieproject/nellie/mos6502/operations/BCS'), // Branch on Carry Set
  BEQ: require('@ellieproject/nellie/mos6502/operations/BEQ'), // Branch on Result Zero
  BIT: require('@ellieproject/nellie/mos6502/operations/BIT'), // Test Bits in M with A
  BMI: require('@ellieproject/nellie/mos6502/operations/BMI'), // Branch on Result Minus
  BNE: require('@ellieproject/nellie/mos6502/operations/BNE'), // Branch on Result not Zero
  BPL: require('@ellieproject/nellie/mos6502/operations/BPL'), // Branch on Result Plus
  BRK: require('@ellieproject/nellie/mos6502/operations/BRK'), // Force Break
  BVC: require('@ellieproject/nellie/mos6502/operations/BVC'), // Branch on Overflow Clear
  BVS: require('@ellieproject/nellie/mos6502/operations/BVS'), // Branch on Overflow Set
  CLC: require('@ellieproject/nellie/mos6502/operations/CLC'), // Clear Carry Flag
  CLD: require('@ellieproject/nellie/mos6502/operations/CLD'), // Clear Decimal Mode
  CLI: require('@ellieproject/nellie/mos6502/operations/CLI'), // Clear Interrupt Disable Flag
  CLV: require('@ellieproject/nellie/mos6502/operations/CLV'), // Clear Overflow Flag
  CMP: require('@ellieproject/nellie/mos6502/operations/CMP'), // Compare M and A
  CPX: require('@ellieproject/nellie/mos6502/operations/CPX'), // Compare M and X
  CPY: require('@ellieproject/nellie/mos6502/operations/CPY'), // Compare M and Y
  DEC: require('@ellieproject/nellie/mos6502/operations/DEC'), // Decrement M by One
  DEX: require('@ellieproject/nellie/mos6502/operations/DEX'), // Decrement X by One
  DEY: require('@ellieproject/nellie/mos6502/operations/DEY'), // Decrement Y by One
  EOR: require('@ellieproject/nellie/mos6502/operations/EOR'), // "Exclusive-Or" M with A
  INC: require('@ellieproject/nellie/mos6502/operations/INC'), // Increment M by One
  INX: require('@ellieproject/nellie/mos6502/operations/INX'), // Increment X by One
  INY: require('@ellieproject/nellie/mos6502/operations/INY'), // Increment Y by One
  JMP: require('@ellieproject/nellie/mos6502/operations/JMP'), // Jump to Location
  JSR: require('@ellieproject/nellie/mos6502/operations/JSR'), // Jump to Location Save Return Address
  LDA: require('@ellieproject/nellie/mos6502/operations/LDA'), // Load A with M
  LDX: require('@ellieproject/nellie/mos6502/operations/LDX'), // Load X with M
  LDY: require('@ellieproject/nellie/mos6502/operations/LDY'), // Load Y with M
  LSR: require('@ellieproject/nellie/mos6502/operations/LSR'), // Shift Right One Bit (M or A)
  NOP: require('@ellieproject/nellie/mos6502/operations/NOP'), // No Operation
  ORA: require('@ellieproject/nellie/mos6502/operations/ORA'), // "OR" M with A
  PHA: require('@ellieproject/nellie/mos6502/operations/PHA'), // Push A on Stack
  PHP: require('@ellieproject/nellie/mos6502/operations/PHP'), // Push Processor Status on Stack
  PLA: require('@ellieproject/nellie/mos6502/operations/PLA'), // Pull A from Stack
  PLP: require('@ellieproject/nellie/mos6502/operations/PLP'), // Pull Processor Status from Stack
  ROL: require('@ellieproject/nellie/mos6502/operations/ROL'), // Rotate One Bit Left (M or A)
  ROR: require('@ellieproject/nellie/mos6502/operations/ROR'), // Rotate One Bit Right (M or A)
  RTI: require('@ellieproject/nellie/mos6502/operations/RTI'), // Return from Interrupt
  RTS: require('@ellieproject/nellie/mos6502/operations/RTS'), // Return from Subroutine
  SBC: require('@ellieproject/nellie/mos6502/operations/SBC'), // Subtract M from A with Borrow
  SEC: require('@ellieproject/nellie/mos6502/operations/SEC'), // Set Carry Flag
  SED: require('@ellieproject/nellie/mos6502/operations/SED'), // Set Decimal Mode
  SEI: require('@ellieproject/nellie/mos6502/operations/SEI'), // Set Interrupt Disable Status
  STA: require('@ellieproject/nellie/mos6502/operations/STA'), // Store A in M
  STX: require('@ellieproject/nellie/mos6502/operations/STX'), // Store X in M
  STY: require('@ellieproject/nellie/mos6502/operations/STY'), // Store Y in M
  TAX: require('@ellieproject/nellie/mos6502/operations/TAX'), // Transfer A to X
  TAY: require('@ellieproject/nellie/mos6502/operations/TAY'), // Transfer A to Y
  TSX: require('@ellieproject/nellie/mos6502/operations/TSX'), // Transfer Stack Pointer to X
  TXA: require('@ellieproject/nellie/mos6502/operations/TXA'), // Transfer X to A
  TXS: require('@ellieproject/nellie/mos6502/operations/TXS'), // Transfer X to Stack Pointer
  TYA: require('@ellieproject/nellie/mos6502/operations/TYA'), // Transfer Y to A
};

module.exports = OPCODES;

/* nellie/opcodes.js
 *
 */

const OPCODES = {
  ADC: require('./opcodes/ADC.js'), // Add M to A with Carry
  AND: require('./opcodes/AND.js'), // "AND" M with A
  ASL: require('./opcodes/ASL.js'), // Shift Left One Bit (M or A)
  BCC: require('./opcodes/BCC.js'), // Branch on Carry Clear
  BCS: require('./opcodes/BCS.js'), // Branch on Carry Set
  BEQ: require('./opcodes/BEQ.js'), // Branch on Result Zero
  BIT: require('./opcodes/BIT.js'), // Test Bits in M with A
  BMI: require('./opcodes/BMI.js'), // Branch on Result Minus
  BNE: require('./opcodes/BNE.js'), // Branch on Result not Zero
  BPL: require('./opcodes/BPL.js'), // Branch on Result Plus
  BRK: require('./opcodes/BRK.js'), // Force Break
  BVC: require('./opcodes/BVC.js'), // Branch on Overflow Clear
  BVS: require('./opcodes/BVS.js'), // Branch on Overflow Set
  CLC: require('./opcodes/CLC.js'), // Clear Carry Flag
  CLD: require('./opcodes/CLD.js'), // Clear Decimal Mode
  CLI: require('./opcodes/CLI.js'), // Clear Interrupt Disable Flag
  CLV: require('./opcodes/CLV.js'), // Clear Overflow Flag
  CMP: require('./opcodes/CMP.js'), // Compare M and A
  CPX: require('./opcodes/CPX.js'), // Compare M and X
  CPY: require('./opcodes/CPY.js'), // Compare M and Y
  DEC: require('./opcodes/DEC.js'), // Decrement M by One
  DEX: require('./opcodes/DEX.js'), // Decrement X by One
  DEY: require('./opcodes/DEY.js'), // Decrement Y by One
  EOR: require('./opcodes/EOR.js'), // "Exclusive-Or" M with A
  INC: require('./opcodes/INC.js'), // Increment M by One
  INX: require('./opcodes/INX.js'), // Increment X by One
  INY: require('./opcodes/INY.js'), // Increment Y by One
  JMP: require('./opcodes/JMP.js'), // Jump to Location
  JSR: require('./opcodes/JSR.js'), // Jump to Location Save Return Address
  LDA: require('./opcodes/LDA.js'), // Load A with M
  LDX: require('./opcodes/LDX.js'), // Load X with M
  LDY: require('./opcodes/LDY.js'), // Load Y with M
  LSR: require('./opcodes/LSR.js'), // Shift Right One Bit (M or A)
  NOP: require('./opcodes/NOP.js'), // No Operation
  ORA: require('./opcodes/ORA.js'), // "OR" M with A
  PHA: require('./opcodes/PHA.js'), // Push A on Stack
  PHP: require('./opcodes/PHP.js'), // Push Processor Status on Stack
  PLA: require('./opcodes/PLA.js'), // Pull A from Stack
  PLP: require('./opcodes/PLP.js'), // Pull Processor Status from Stack
  ROL: require('./opcodes/ROL.js'), // Rotate One Bit Left (M or A)
  ROR: require('./opcodes/ROR.js'), // Rotate One Bit Right (M or A)
  RTI: require('./opcodes/RTI.js'), // Return from Interrupt
  RTS: require('./opcodes/RTS.js'), // Return from Subroutine
  SBC: require('./opcodes/SBC.js'), // Subtract M from A with Borrow
  SEC: require('./opcodes/SEC.js'), // Set Carry Flag
  SED: require('./opcodes/SED.js'), // Set Decimal Mode
  SEI: require('./opcodes/SEI.js'), // Set Interrupt Disable Status
  STA: require('./opcodes/STA.js'), // Store A in M
  STX: require('./opcodes/STX.js'), // Store X in M
  STY: require('./opcodes/STY.js'), // Store Y in M
  TAX: require('./opcodes/TAX.js'), // Transfer A to X
  TAY: require('./opcodes/TAY.js'), // Transfer A to Y
  TSX: require('./opcodes/TSX.js'), // Transfer Stack Pointer to X
  TXA: require('./opcodes/TXA.js'), // Transfer X to A
  TXS: require('./opcodes/TXS.js'), // Transfer X to Stack Pointer
  TYA: require('./opcodes/TYA.js'), // Transfer Y to A
};

module.exports = OPCODES;

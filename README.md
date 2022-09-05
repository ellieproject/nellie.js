# nellie.js
[![passing tests](https://img.shields.io/badge/dynamic/json?color=success&label=Tests&query=stats.passes&suffix=%20passing&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Ftest.json&logo=github&logoColor=white)
![failing tests](https://img.shields.io/badge/dynamic/json?color=critical&label=Tests&query=stats.failures&suffix=%20failing&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Ftest.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml)
[![coverage lines](https://img.shields.io/badge/dynamic/json?color=informational&label=Coverage&query=total.lines.pct&suffix=%25%20lines&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)
![coverage statements](https://img.shields.io/badge/dynamic/json?color=informational&label=Coverage&query=total.statements.pct&suffix=%25%20statements&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)
![coverage functions](https://img.shields.io/badge/dynamic/json?color=informational&label=Coverage&query=total.functions.pct&suffix=%25%20functions&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)
![coverage branches](https://img.shields.io/badge/dynamic/json?color=informational&label=Coverage&query=total.branches.pct&suffix=%25%20branches&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://ellieproject.github.io/nellie.js/coverage)

An NES Emulation demo written using the ellie.js library.

# Emulation Progress

## iNES File Format ❌

There is currently no support.

## MOS 6502 ⚠️

The MOS6502 currently lacks a clock and most of its feature set, including a good way to feed instructions in.

### Opcodes & Address Modes

Opcodes: 26/55
Opcodes + Address Modes: 44/153

|    |                          |
|---:|--------------------------|
| ❌ | Neither Opcode nor Mode  |
| ⚠️ | Mode Tested              |
| ✔️ | Opcode and Mode Tested |

#### Arithmetic & Bitwise Logic

|           | ABX | ABY | ABS | IMM | INX | INY | ZPX | ZP |
|----------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   **ADC** | ⚠️ |  ⚠️ | ⚠️  | ⚠️ | ❌  | ❌  | ⚠️  | ⚠️  |
|   **AND** | ⚠️ |  ⚠️ | ✔️  | ✔️ | ❌  | ❌  | ⚠️  | ✔️  |
| ✔️**BIT** |    |     | ✔️  |     |      |     |     | ✔️  |
|   **CMP** | ⚠️ |  ⚠️ | ⚠️  | ⚠️ | ❌  | ❌  | ⚠️  | ⚠️  |
|   **CPX** |    |     | ⚠️  | ⚠️ |      |     |     | ⚠️  |
|   **CPY** |    |     | ⚠️  | ⚠️ |      |     |     | ⚠️  |
|   **EOR** | ⚠️ |  ⚠️ | ⚠️  | ⚠️ | ❌  | ❌  | ⚠️  | ⚠️  |
|   **ORA** | ⚠️ |  ⚠️ | ⚠️  | ⚠️ | ❌  | ❌  | ⚠️  | ⚠️  |
|   **SBC** | ⚠️ |  ⚠️ | ⚠️  | ⚠️ | ❌  | ❌  | ⚠️  | ⚠️  |

#### Load & Store to Memory

|           | ABX | ABY | ABS | IMM | INX | INY | ZPX | ZPY | ZP |
|----------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   **LDA** | ⚠️  | ⚠️ | ✔️ | ✔️   | ❌ |  ❌ |  ⚠️ |     | ✔️ |
|   **LDX** |     | ⚠️ | ✔️ | ✔️   |     |     |     |  ⚠️ | ✔️ |
| ✔️**LDY** | ✔️  |    | ✔️ | ✔️   |     |     |  ✔️ |     | ✔️ |
|   **STA** | ⚠️  | ⚠️ | ⚠️ |      | ❌ |  ❌ |  ⚠️ |     | ⚠️ |
|   **STX** |     | ⚠️ | ⚠️ |      |     |     |     |  ⚠️ | ⚠️ |
|   **STY** | ⚠️  |    | ⚠️ |      |     |     |  ⚠️ |     | ⚠️ |

#### Shift & Increment Register

|           | ABX | ABS | ACC | IMP | ZPX | ZP |
|----------:|:---:|:---:|:---:|:---:|:---:|:---:|
|   **ASL** | ⚠️ | ⚠️  |  ⚠️ |     |  ⚠️ | ⚠️ |
|   **DEC** | ⚠️ | ⚠️  |     |     |  ⚠️ | ⚠️ |
| ✔️**DEX** |    |     |      | ✔️ |     |     |
| ✔️**DEY** |    |     |      | ✔️ |     |     |
|   **INC** | ⚠️ | ⚠️  |     |     |  ⚠️ | ⚠️ |
| ✔️**INX** |    |     |      | ✔️ |     |     |
| ✔️**INY** |    |     |      | ✔️ |     |     |
|   **LSR** | ⚠️ | ⚠️  |  ✔️ |     |  ⚠️ | ⚠️ |
|   **ROL** | ⚠️ | ⚠️  |  ✔️ |     |  ⚠️ | ⚠️ |
|   **ROR** | ⚠️ | ⚠️  |  ✔️ |     |  ⚠️ | ⚠️ |

#### Branch Control

|           | REL |
|----------:|:---:|
| ✔️**BCC** | ✔️ |
| ✔️**BCS** | ✔️ |
| ✔️**BEQ** | ✔️ |
| ✔️**BMI** | ✔️ |
| ✔️**BNE** | ✔️ |
| ✔️**BPL** | ✔️ |
| ✔️**BVC** | ✔️ |
| ✔️**BVS** | ✔️ |

#### Flow Control

|           | ABS | IMP | IND |
|----------:|-----|:---:|:---:|
|   **BRK** |     |  ⚠️ |     |
|   **JMP** | ⚠️ |      |  ❌ |
|   **JSR** | ⚠️ |      |     |
| ✔️**NOP** |    |   ✔️ |     |
|   **RTI** |     |  ⚠️ |     |
|   **RTS** |     |  ⚠️ |     |

#### Flag Control

|           | IMP |
|----------:|:---:|
| ✔️**CLC** | ✔️ |
| ✔️**CLD** | ✔️ |
| ✔️**CLI** | ✔️ |
| ✔️**CLV** | ✔️ |
| ✔️**SEC** | ✔️ |
| ✔️**SED** | ✔️ |
| ✔️**SEI** | ✔️ |

#### Stack Control & Transfer Register

|           | IMP |
|----------:|:---:|
|   **PHA** | ❌ |
|   **PHP** | ❌ |
|   **PLA** | ❌ |
|   **PLP** | ❌ |
| ✔️**TAX** | ✔️ |
| ✔️**TAY** | ✔️ |
|   **TSX** | ❌ |
| ✔️**TXA** | ✔️ |
|   **TXS** | ❌ |
| ✔️**TYA** | ✔️ |

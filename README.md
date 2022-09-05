# nellie.js
[![passing tests](https://img.shields.io/badge/dynamic/json?color=success&label=Tests&query=stats.passes&suffix=%20passing&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Ftest.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml)
[![failing tests](https://img.shields.io/badge/dynamic/json?color=critical&label=Tests&query=stats.failures&suffix=%20failing&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Ftest.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml)
[![coverage lines](https://img.shields.io/badge/dynamic/json?color=informational&label=Coverage&query=total.lines.pct&suffix=%25%20lines&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://ellieproject.github.io/nellie.js/coverage)
[![coverage statements](https://img.shields.io/badge/dynamic/json?color=informational&label=Coverage&query=total.statements.pct&suffix=%25%20statements&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://ellieproject.github.io/nellie.js/coverage)
[![coverage functions](https://img.shields.io/badge/dynamic/json?color=informational&label=Coverage&query=total.functions.pct&suffix=%25%20functions&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://ellieproject.github.io/nellie.js/coverage)
[![coverage branches](https://img.shields.io/badge/dynamic/json?color=informational&label=Coverage&query=total.branches.pct&suffix=%25%20branches&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://ellieproject.github.io/nellie.js/coverage)

An NES Emulation demo written using the ellie.js library.

## Emulation Progress

### iNES File Format ❌

There is currently no support.

### MOS 6502 ⚠️

The MOS6502 currently lacks a clock and most of its feature set, including a good way to feed instructions in.

#### Opcodes & Address Modes

|   |                          |
|--:|--------------------------|
| ❌ | Neither Opcode nor Mode  |
| ❕ | Mode Tested              |
| ❔ | Opcode Tested            |
| ✔️ | Opcode and Mode Complete |
|   |                          |

|             | ADC | AND | ASL | BCC | BCS | BEQ | BIT | BMI | BNE | BPL | BRK | BVC | BVS | CLC |
|:-----------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  ABSOLUTE X |  ❌  |  ❌  |  ❌  |     |     |     |     |     |     |     |     |     |     |     |
|  ABSOLUTE Y |  ❌  |  ❌  |     |     |     |     |     |     |     |     |     |     |     |     |
|   ABSOLUTE  |  ❌  |  ❌  |  ❌  |     |     |     |  ❌  |     |     |     |     |     |     |     |
| ACCUMULATOR |     |     |  ❕  |     |     |     |     |     |     |     |     |     |     |     |
|  IMMEDIATE  |  ❕  |  ❕  |     |     |     |     |     |     |     |     |     |     |     |     |
|   IMPLIED   |     |     |     |     |     |     |     |     |     |     |  ❕  |     |     |  ❕  |
|  INDIRECT X |  ❌  |  ❌  |     |     |     |     |     |     |     |     |     |     |     |     |
|  INDIRECT Y |  ❌  |  ❌  |     |     |     |     |     |     |     |     |     |     |     |     |
|   INDIRECT  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|   RELATIVE  |     |     |     |  ❌  |  ❌  |  ❌  |     |  ❌  |  ❌  |  ❌  |     |  ❌  |  ❌  |     |
| ZERO PAGE X |  ❌  |  ❌  |  ❌  |     |     |     |     |     |     |     |     |     |     |     |
| ZERO PAGE Y |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|  ZERO PAGE  |  ❌  |  ❌  |  ❌  |     |     |     |  ❌  |     |     |     |     |     |     |     |

|             | CLD | CLI | CLV | CMP | CPX | CPY | DEC | DEX | DEY | EOR | INC | INX | INY | JMP |
|:-----------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  ABSOLUTE X |     |     |     |  ❌  |     |     |  ❌  |     |     |  ❌  |  ❌  |     |     |     |
|  ABSOLUTE Y |     |     |     |  ❌  |     |     |     |     |     |  ❌  |     |     |     |     |
|   ABSOLUTE  |     |     |     |  ❌  |  ❌  |  ❌  |  ❌  |     |     |  ❌  |  ❌  |     |     |  ❌  |
| ACCUMULATOR |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|  IMMEDIATE  |     |     |     |  ❕  |  ❕  |  ❕  |     |     |     |  ❕  |     |     |     |     |
|   IMPLIED   |  ❕  |  ❕  |  ❕  |     |     |     |     |  ❕  |  ❕  |     |     |  ❕  |  ❕  |     |
|  INDIRECT X |     |     |     |  ❌  |     |     |     |     |     |  ❌  |     |     |     |     |
|  INDIRECT Y |     |     |     |  ❌  |     |     |     |     |     |  ❌  |     |     |     |     |
|   INDIRECT  |     |     |     |     |     |     |     |     |     |     |     |     |     |  ❌  |
|   RELATIVE  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| ZERO PAGE X |     |     |     |  ❌  |     |     |  ❌  |     |     |  ❌  |  ❌  |     |     |     |
| ZERO PAGE Y |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|  ZERO PAGE  |     |     |     |  ❌  |  ❌  |  ❌  |  ❌  |     |     |  ❌  |  ❌  |     |     |     |

|             | JSR | LDA | LDX | LDY | LSR | NOP | ORA | PHA | PHP | PLA | PLP | ROL | ROR | RTI |
|:-----------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  ABSOLUTE X |     |  ❌  |     |  ❌  |  ❌  |     |  ❌  |     |     |     |     |  ❌  |  ❌  |     |
|  ABSOLUTE Y |     |  ❌  |  ❌  |     |     |     |  ❌  |     |     |     |     |     |     |     |
|   ABSOLUTE  |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |     |  ❌  |     |     |     |     |  ❌  |  ❌  |     |
| ACCUMULATOR |     |     |     |     |  ✔️  |     |     |     |     |     |     |  ✔️  |  ✔️  |     |
|  IMMEDIATE  |     |  ❕  |  ✔️  |  ✔️  |     |     |  ❕  |     |     |     |     |     |     |     |
|   IMPLIED   |     |     |     |     |     |  ✔️  |     |  ❕  |  ❕  |  ❕  |  ❕  |     |     |  ❕  |
|  INDIRECT X |     |  ❌  |     |     |     |     |  ❌  |     |     |     |     |     |     |     |
|  INDIRECT Y |     |  ❌  |     |     |     |     |  ❌  |     |     |     |     |     |     |     |
|   INDIRECT  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|   RELATIVE  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| ZERO PAGE X |     |  ❌  |     |  ❌  |  ❌  |     |  ❌  |     |     |     |     |  ❌  |  ❌  |     |
| ZERO PAGE Y |     |     |  ❌  |     |     |     |     |     |     |     |     |     |     |     |
|  ZERO PAGE  |     |  ❌  |  ❌  |  ❌  |  ❌  |     |  ❌  |     |     |     |     |  ❌  |  ❌  |     |

|             | RTS | SBC | SEC | SED | SEI | STA | STX | STY | TAX | TAY | TSX | TXA | TXS | TYA |
|:-----------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  ABSOLUTE X |     |  ❌  |     |     |     |  ❌  |     |     |     |     |     |     |     |     |
|  ABSOLUTE Y |     |  ❌  |     |     |     |  ❌  |     |     |     |     |     |     |     |     |
|   ABSOLUTE  |     |  ❌  |     |     |     |  ❌  |  ❌  |  ❌  |     |     |     |     |     |     |
| ACCUMULATOR |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|  IMMEDIATE  |     |  ❕  |     |     |     |     |     |     |     |     |     |     |     |     |
|   IMPLIED   |  ❕  |     |  ✔️  |  ✔️  |  ✔️  |     |     |     |  ✔️  |  ✔️  |  ❕  |  ✔️  |  ❕  |  ✔️  |
|  INDIRECT X |     |  ❌  |     |     |     |  ❌  |     |     |     |     |     |     |     |     |
|  INDIRECT Y |     |  ❌  |     |     |     |  ❌  |     |     |     |     |     |     |     |     |
|   INDIRECT  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|   RELATIVE  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| ZERO PAGE X |     |  ❌  |     |     |     |  ❌  |     |  ❌  |     |     |     |     |     |     |
| ZERO PAGE Y |     |     |     |     |     |     |  ❌  |     |     |     |     |     |     |     |
|  ZERO PAGE  |     |  ❌  |     |     |     |  ❌  |  ❌  |  ❌  |     |     |     |     |     |     |

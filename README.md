# nellie.js
[![passing tests](https://img.shields.io/badge/dynamic/json?color=success&label=Tests&query=stats.passes&suffix=%20passing&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Ftest.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml) [![failing tests](https://img.shields.io/badge/dynamic/json?color=critical&label=Tests&query=stats.failures&suffix=%20failing&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Ftest.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml) [![coverage lines](https://img.shields.io/badge/dynamic/json?color=informational&label=Tests&query=total.lines.pct&suffix=%25%20lines&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml) [![coverage statements](https://img.shields.io/badge/dynamic/json?color=informational&label=Tests&query=total.statements.pct&suffix=%25%20statements&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml) [![coverage functions](https://img.shields.io/badge/dynamic/json?color=informational&label=Tests&query=total.functions.pct&suffix=%25%20functions&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml) [![coverage branches](https://img.shields.io/badge/dynamic/json?color=informational&label=Tests&query=total.branches.pct&suffix=%25%20branches&url=https%3A%2F%2Fellieproject.github.io%2Fnellie.js%2Fcoverage%2Fcoverage-summary.json&logo=github&logoColor=white)](https://github.com/ellieproject/nellie.js/actions/workflows/node.js.yml) 

An NES Emulation demo written using the ellie.js library.

## Emulation Progress

### iNES File Format ❌

There is currently no support.

### MOS 6502 ⚠️

The MOS6502 currently lacks a clock and most of its feature set, including a good way to feed instructions in.

#### Opcodes

- ADC = incomplete ❌
- AND = incomplete ❌
- ASL =  partial ⚠️ (ABSOLUTE X ❌, ABSOLUTE ❌, ACCUMULATOR ZERO ❔, PAGE X ❌, ZERO PAGE ❌)
- BCC = incomplete ❌
- BCS = incomplete ❌
- BEQ = incomplete ❌
- BIT = incomplete ❌
- BMI = incomplete ❌
- BNE = incomplete ❌
- BPL = incomplete ❌
- BRK = incomplete ❌
- BVC = incomplete ❌
- BVS = incomplete ❌
- CLC = needs tests ❔
- CLD = needs tests ❔
- CLI = needs tests ❔
- CLV = needs tests ❔
- CMP = incomplete ❌
- CPX = incomplete ❌
- CPY = incomplete ❌
- DEC = incomplete ❌
- DEX = needs tests ❔
- DEY = needs tests ❔
- EOR = incomplete ❌
- INC = incomplete ❌
- INX = needs tests ❔
- INY = needs tests ❔
- JMP = incomplete ❌
- JSR = incomplete ❌
- LDA = incomplete ❌
- LDX = incomplete ❌
- LDY = incomplete ❌
- LSR =  partial ⚠️ (ABSOLUTE X ❌, ABSOLUTE ❌, ACCUMULATOR ZERO ❔, PAGE X ❌, ZERO PAGE ❌)
- NOP = needs tests ❔
- ORA = incomplete ❌
- PHA = incomplete ❌
- PHP = incomplete ❌
- PLA = incomplete ❌
- PLP = incomplete ❌
- ROL =  partial ⚠️ (ABSOLUTE X ❌, ABSOLUTE ❌, ACCUMULATOR ZERO ❔, PAGE X ❌, ZERO PAGE ❌)
- ROR = partial ⚠️ (ABSOLUTE X ❌, ABSOLUTE ❌, ACCUMULATOR ZERO ❔, PAGE X ❌, ZERO PAGE ❌)
- RTI = incomplete ❌
- RTS = incomplete ❌
- SBC = incomplete ❌
- SEC = needs tests ❔
- SED = needs tests ❔
- SEI = needs tests ❔
- STA = incomplete ❌
- STX = incomplete ❌
- STY = incomplete ❌
- TAX = needs tests ❔
- TAY = needs tests ❔
- TSX = incomplete ❌
- TXA = needs tests ❔
- TXS = incomplete ❌
- TYA = needs tests ❔

#### Addressing Modes

- Absolute X = incomplete ❌
- Absolute Y = incomplete ❌
- Absolute = incomplete ❌
- Accumulator = needs tests ❔
- Immediate = incomplete ❌
- Implied = needs tests ❔
- Indirect X = incomplete ❌
- Indirect Y = incomplete ❌
- Indirect = incomplete ❌
- Relative = incomplete ❌
- Zero Page X = incomplete ❌
- Zero Page Y = incomplete ❌
- Zero Page = incomplete ❌

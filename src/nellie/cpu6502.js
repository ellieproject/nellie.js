/* nellie/cpu6502.js
 *
 */

const Ellie = require('@ellieproject/ellie');

const CPU6502 = new Ellie.Processor('6502');

CPU6502.OPCODES = require('./cpu6502/opcodes.js')

for (const name in CPU6502.OPCODES) {
  CPU6502.addOpcode(CPU6502.OPCODES[name]);
}

module.exports = CPU6502;

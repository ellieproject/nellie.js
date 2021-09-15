/* nellie/opcodes/ADC.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeADC(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeADC()

const ADC = new Ellie.Opcode(
  'ADC',
  '"ADD" Memory to A with Carry',
  executeADC
); // ADC

ADC.addAddressingMode(0x7D, MODES.ABSOLUTE_X);
ADC.addAddressingMode(0x79, MODES.ABSOLUTE_Y);
ADC.addAddressingMode(0x6D, MODES.ABSOLUTE);
ADC.addAddressingMode(0x69, MODES.IMMEDIATE);
ADC.addAddressingMode(0x61, MODES.INDIRECT_X);
ADC.addAddressingMode(0x71, MODES.INDIRECT_Y);
ADC.addAddressingMode(0x75, MODES.ZERO_PAGE_X);
ADC.addAddressingMode(0x65, MODES.ZERO_PAGE);

module.exports = ADC;

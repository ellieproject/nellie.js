/* nellie/mos6502/operations/ADC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeADC(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeADC()

const ADC = new Ellie.Processor.Operation(
  'ADC',
  '"ADD" Memory to A with Carry',
  executeADC
); // ADC

ADC.addMode(0x7D, MODES.ABSOLUTE_X);
ADC.addMode(0x79, MODES.ABSOLUTE_Y);
ADC.addMode(0x6D, MODES.ABSOLUTE);
ADC.addMode(0x69, MODES.IMMEDIATE);
ADC.addMode(0x61, MODES.INDIRECT_X);
ADC.addMode(0x71, MODES.INDIRECT_Y);
ADC.addMode(0x75, MODES.ZERO_PAGE_X);
ADC.addMode(0x65, MODES.ZERO_PAGE);

module.exports = ADC;

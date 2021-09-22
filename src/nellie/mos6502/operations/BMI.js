/* nellie/mos6502/operations/BMI.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBMI(instruction, processor) {
  console.debug(this.name);
  return false;
} // executeBMI()

const BMI = new Ellie.Processor.Operation(
  'BMI',
  'Branch on Result Minus',
  executeBMI
); // BMI

BMI.addMode(0x30, MODES.IMPLIED);

module.exports = BMI;

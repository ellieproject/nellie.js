/* nellie/opcodes/BMI.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeBMI(instruction, processor) {
  console.log(this);
  return;
} // executeBMI()

const BMI = new Ellie.Opcode(
  'BMI',
  'Branch on Result Minus',
  executeBMI
); // BMI

BMI.addAddressingMode(0x30, MODES.IMPLIED);

module.exports = BMI;

/* nellie/opcodes/LDA.js
 *
 */

const MODES = require('./modes.js');
const Ellie = require('@ellieproject/ellie');

function executeLDA(instruction, processor) {
  console.debug(this.name);
  return;
} // executeLDA()

const LDA = new Ellie.Opcode(
  'LDA',
  'Load from Memory',
  executeLDA
); // LDA

LDA.addAddressingMode(0xBD, MODES.ABSOLUTE_X);
LDA.addAddressingMode(0xB9, MODES.ABSOLUTE_Y);
LDA.addAddressingMode(0xAD, MODES.ABSOLUTE);
LDA.addAddressingMode(0xA9, MODES.IMMEDIATE);
LDA.addAddressingMode(0xA1, MODES.INDIRECT_X);
LDA.addAddressingMode(0xB1, MODES.INDIRECT_Y);
LDA.addAddressingMode(0xB5, MODES.ZERO_PAGE_X);
LDA.addAddressingMode(0xA5, MODES.ZERO_PAGE);

module.exports = LDA;

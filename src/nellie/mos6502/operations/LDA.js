/* nellie/mos6502/operations/LDA.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeLDA(processor) {
  // negative flag check
  processor.register.p.bitSet('N', processor.register.b.bit(7));
  // zero flag check
  processor.register.p.bitSet('Z', processor.register.b.test(0x0));
  // B => Y
  processor.register.a.load(processor.register.b);
  return true;
} // executeLDA()

const LDA = new Ellie.Processor.Operation(
  'LDA',
  'Load from Memory',
  executeLDA
); // LDA

LDA.addMode(0xBD, MODES.ABSOLUTE_X);
LDA.addMode(0xB9, MODES.ABSOLUTE_Y);
LDA.addMode(0xAD, MODES.ABSOLUTE);
LDA.addMode(0xA9, MODES.IMMEDIATE);
LDA.addMode(0xA1, MODES.INDIRECT_X);
LDA.addMode(0xB1, MODES.INDIRECT_Y);
LDA.addMode(0xB5, MODES.ZERO_PAGE_X);
LDA.addMode(0xA5, MODES.ZERO_PAGE);

module.exports = LDA;

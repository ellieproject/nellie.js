/* nellie/mos6502/operations/TXS/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeTXSTick(processor) {
  console.debug(this.name);
  return false;
} // executeTXSTick()

const TXS = new Ellie.Processor.Operation(
  'TXS',
  'Transfer X to Stack Pointer',
  executeTXSTick
); // TXS

TXS.addMode(0x9A, MODES.IMPLIED);

module.exports = TXS;

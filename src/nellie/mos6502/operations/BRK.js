/* nellie/mos6502/operations/BRK.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeBRKTick(processor) {
  console.debug(this.name);
  return false;
} // executeBRKTick()

const BRK = new Ellie.Processor.Operation(
  'BRK',
  'Force Break',
  executeBRKTick
); // BRK

BRK.addMode(0x00, MODES.IMMEDIATE);

module.exports = BRK;

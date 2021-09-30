/* nellie/mos6502/operations/BNE.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBNE(processor) {
  // TODO: I really need an Ellie.ALU for arithmatic...
  let rel = processor.register.b.get();
  let page = processor.register.pc.bit(8); // even or odd page?
  // takes two ticks, hit or miss
  if (processor.register.p.bit('Z') === 0) {
    if (rel > 0x7F) {
      rel -= 0x100;
    }
    // take an extra tick on a hit
    processor.register.pc.inc(rel);
    if (page !== processor.register.pc.bit(8)) {
      // take an extra tick for a page boundary
      console.log(`BNE page cross! PC = 0x${processor.register.pc.get().toString(16)}`);
    }
  }
  return true;
} // executeBNE()

const BNE = new Ellie.Processor.Operation(
  'BNE',
  'Branch on Result not Zero',
  executeBNE
); // BNE

BNE.addMode(0xD0, MODES.RELATIVE);

module.exports = BNE;

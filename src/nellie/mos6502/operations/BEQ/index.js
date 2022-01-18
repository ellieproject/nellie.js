/* nellie/mos6502/operations/BEQ/index.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function* executeBEQTick(processor) {
  // TODO: I really need an Ellie.ALU for arithmatic...
  let rel = processor.register.b.get();
  let page = processor.register.pc.bit(8); // even or odd page?
  // takes two ticks, hit or miss
  if (processor.register.p.bit('Z') === 1) {
    if (rel > 0x7F) {
      rel -= 0x100;
    }
    // take an extra tick on a hit
    processor.register.pc.inc(rel);
    if (page !== processor.register.pc.bit(8)) {
      // take an extra tick for a page boundary
      console.log(`BEQ page cross! PC = 0x${processor.register.pc.get().toString(16)}`);
    }
  }
  return true;
} // executeBEQTick()

const BEQ = new Ellie.Processor.Operation(
  'BEQ',
  'Branch on Result Zero',
  executeBEQTick
); // BEQ

BEQ.addMode(0xF0, MODES.RELATIVE);

module.exports = BEQ;

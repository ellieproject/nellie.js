/* nellie/mos6502/operations/BVS.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBVS(processor) {
  // TODO: I really need an Ellie.ALU for arithmatic...
  let rel = processor.register.b.get();
  let page = processor.register.pc.bit(8); // even or odd page?
  // takes two ticks, hit or miss
  if (processor.register.p.bit('V') === 1) {
    if (rel > 0x7F) {
      rel -= 0x100;
    }
    // take an extra tick on a hit
    processor.register.pc.inc(rel);
    if (page !== processor.register.pc.bit(8)) {
      // take an extra tick for a page boundary
      console.log(`BVS page cross! PC = 0x${processor.register.pc.get().toString(16)}`);
    }
  }
  return true;
} // executeBVS()

const BVS = new Ellie.Processor.Operation(
  'BVS',
  'Branch on Overflow Set',
  executeBVS
); // BVS

BVS.addMode(0x70, MODES.RELATIVE);

module.exports = BVS;

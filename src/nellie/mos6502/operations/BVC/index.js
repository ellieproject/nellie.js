/* nellie/mos6502/operations/BVC.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBVC(processor) {
  // TODO: I really need an Ellie.ALU for arithmatic...
  let rel = processor.register.b.get();
  let page = processor.register.pc.bit(8); // even or odd page?
  // takes two ticks, hit or miss
  if (processor.register.p.bit('V') === 0) {
    if (rel > 0x7F) {
      rel -= 0x100;
    }
    // take an extra tick on a hit
    processor.register.pc.inc(rel);
    if (page !== processor.register.pc.bit(8)) {
      // take an extra tick for a page boundary
      console.log(`BVC page cross! PC = 0x${processor.register.pc.get().toString(16)}`);
    }
  }
  return true;
} // executeBVC()

const BVC = new Ellie.Processor.Operation(
  'BVC',
  'Branch on Overflow Clear',
  executeBVC
); // BVC

BVC.addMode(0x50, MODES.RELATIVE);

module.exports = BVC;

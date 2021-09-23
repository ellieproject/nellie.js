/* nellie/mos6502/operations/BVS.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeBVS(processor) {
  console.debug(this.name);
  return false;
} // executeBVS()

const BVS = new Ellie.Processor.Operation(
  'BVS',
  'Branch on Overflow Set',
  executeBVS
); // BVS

BVS.addMode(0x70, MODES.IMPLIED);

module.exports = BVS;

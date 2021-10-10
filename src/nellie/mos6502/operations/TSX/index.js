/* nellie/mos6502/operations/TSX.js
 *
 */

const MODES = require('@ellieproject/nellie/mos6502/modes');
const Ellie = require('@ellieproject/ellie');

function executeTSX(processor) {
  console.debug(this.name);
  return false;
} // executeTSX()

const TSX = new Ellie.Processor.Operation(
  'TSX',
  'Transfer Stack Pointer to X',
  executeTSX
); // TSX

TSX.addMode(0xBA, MODES.IMPLIED);

module.exports = TSX;

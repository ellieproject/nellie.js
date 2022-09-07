/* test/nellie/mos6502/operations/CLI/implied.test.js
 *
 * tests for the IMPLIED mode of the CLI operation
 * mode tests should include:
 *   - exec(MODE...) should return this
 *   - exec(MODE...) should [operation effect]
 *   - MOS6502.execPC() should increment clock by [time]
 *
 */

const test = require('ava');

const OP = require('@ellieproject/nellie/mos6502/operations/CLI');

const generateSharedTests = require('@ellieproject/nellie/test/shared/nellie/mos6502/operations/set_or_clear_bit_mode');
generateSharedTests(
  test,            // test
  OP,              // op
  OP.mode.IMPLIED, // mode
  'I',             // flag
  0,               // setOrClear
  2                // clockTicks
);

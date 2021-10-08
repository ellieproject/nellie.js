/* nellie/mos6502/clock.js
 *
 */

const Ellie = require('@ellieproject/ellie');

const Clock = new Ellie.Processor.Clock(1786830); // 1.7 MHz

module.exports = Clock;

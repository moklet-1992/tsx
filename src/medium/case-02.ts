/**
 * Medium Case 02 — Stadium Gate Shift
 * Points: 140 (Medium)
 *
 * A stadium gate charges each ticket by type. This shift is rainy, so a
 * rain surcharge is added to the total after every ticket is counted.
 *
 * Ticket types this shift:
 * ["regular", "vip", "regular", "student", "regular", "vip", "student", "regular"]
 *
 * Base fee:
 * | Type    | Fee   |
 * | ------- | ----- |
 * | student | 15000 |
 * | regular | 25000 |
 * | vip     | 75000 |
 * | any other | 0   |
 *
 * Rain surcharge = 10% of the total base fee.
 * Final collection = total base fee + rain surcharge.
 *
 * Required functions:
 *  - getBaseFee(ticketType) → the fee for that type
 *  - getRainSurcharge(totalBaseFee, isRain) → 10% when isRain is true, else 0
 *
 * Tasks:
 * 1. Create both functions.
 * 2. Loop the tickets. Count each type and add up the base fees.
 *    Do not use map, filter, or reduce.
 * 3. Apply the rain surcharge only because this is a rain shift.
 * 4. Display every type count, total base fee, surcharge, and final collection.
 *
 * Expected output:
 *  Student: 2
 *  Regular: 4
 *  VIP: 2
 *  Total base fee: 280000
 *  Rain surcharge: 28000
 *  Final collection: 308000
 */

const ticketTypes = ["regular", "vip", "regular", "student", "regular", "vip", "student", "regular"];
const isRainShift = true;

// Write your solution below.

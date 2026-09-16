/**
 * Medium Case 02 — Harbor Dock Shift
 * Points: 140 (Medium)
 *
 * A harbor charges each vessel by type. This shift has a storm warning,
 * so a storm surcharge is added to the total after every vessel is counted.
 *
 * Vessel types this shift:
 * ["ferry", "cargo", "ferry", "yacht", "speedboat", "cargo", "ferry", "cargo"]
 *
 * Base fee:
 * | Type      | Fee   |
 * | --------- | ----- |
 * | speedboat | 4000  |
 * | ferry     | 12000 |
 * | yacht     | 20000 |
 * | cargo     | 25000 |
 * | any other | 0     |
 *
 * Storm surcharge = 20% of the total base fee.
 * Final collection = total base fee + storm surcharge.
 *
 * Required functions:
 *  - getBaseFee(vesselType) → the fee for that type
 *  - getStormSurcharge(totalBaseFee, isStorm) → 20% when isStorm is true, else 0
 *
 * Tasks:
 * 1. Create both functions.
 * 2. Loop the vessels. Count each type and add up the base fees.
 *    Do not use map, filter, or reduce.
 * 3. Apply the storm surcharge only because this is a storm shift.
 * 4. Display every type count, total base fee, surcharge, and final collection.
 *
 * Expected output:
 *  Speedboat: 1
 *  Ferry: 3
 *  Yacht: 1
 *  Cargo: 3
 *  Total base fee: 135000
 *  Storm surcharge: 27000
 *  Final collection: 162000
 */

const vesselTypes = ["ferry", "cargo", "ferry", "yacht", "speedboat", "cargo", "ferry", "cargo"];
const isStormShift = true;

// Write your solution below.

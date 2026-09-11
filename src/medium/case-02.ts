/**
 * Medium Case 02 — Toll Plaza Shift
 * Points: 140 (Medium)
 *
 * A toll plaza charges each vehicle by type. This shift is a night shift, so
 * a night surcharge is added to the total after every vehicle is counted.
 *
 * Vehicle types this shift:
 * ["car", "truck", "car", "bus", "motorcycle", "truck", "car", "truck"]
 *
 * Base fee:
 * | Type       | Fee   |
 * | ---------- | ----- |
 * | motorcycle | 3000  |
 * | car        | 8000  |
 * | bus        | 15000 |
 * | truck      | 20000 |
 * | any other  | 0     |
 *
 * Night surcharge = 25% of the total base fee.
 * Final collection = total base fee + night surcharge.
 *
 * Required functions:
 *  - getBaseFee(vehicleType) → the fee for that type
 *  - getNightSurcharge(totalBaseFee, isNight) → 25% when isNight is true, else 0
 *
 * Tasks:
 * 1. Create both functions.
 * 2. Loop the vehicles. Count each type and add up the base fees.
 *    Do not use map, filter, or reduce.
 * 3. Apply the night surcharge only because this is a night shift.
 * 4. Display every type count, total base fee, surcharge, and final collection.
 *
 * Expected output:
 *  Motorcycle: 1
 *  Car: 3
 *  Bus: 1
 *  Truck: 3
 *  Total base fee: 102000
 *  Night surcharge: 25500
 *  Final collection: 127500
 */

const vehicleTypes = ["car", "truck", "car", "bus", "motorcycle", "truck", "car", "truck"];
const isNightShift = true;

// Write your solution below.

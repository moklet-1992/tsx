/**
 * Medium Case 04 — Coworking Parking
 * Points: 140 (Medium)
 *
 * A coworking lot has 12 parking spots. true means occupied, false means empty.
 * A group of 5 cars wants to park.
 *
 * Spot map (spot 1 to spot 12):
 * [false, true, true, false, true, false, false, true, true, false, true, false]
 *
 * Required functions:
 *  - countEmpty(spots) → how many spots are empty (use a loop)
 *  - findFirstEmptySpot(spots) → the first empty spot number (1-based).
 *    Return 0 when no spot is empty.
 *  - canPark(emptyCount, carCount) → true when emptyCount >= carCount
 *
 * Lot message:
 *  - empty === 0              → "Sold out"
 *  - empty > 0 and empty < 5  → "Almost full"
 *  - empty >= 5               → "Spots available"
 *
 * Tasks:
 * 1. Create the three functions.
 * 2. Loop the spot map. Do not use map, filter, indexOf, or find.
 * 3. Display empty spots, first empty spot number, whether the group can park,
 *    and the lot message.
 *
 * Expected output:
 *  Empty spots: 6
 *  First empty spot: 1
 *  Can park: true
 *  Spots available
 */

const spots = [false, true, true, false, true, false, false, true, true, false, true, false];
const carCount = 5;

// Write your solution below.

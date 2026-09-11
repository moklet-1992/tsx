/**
 * Medium Case 04 — Night Bus Boarding
 * Points: 140 (Medium)
 *
 * A night bus has 12 seats. true means occupied, false means empty.
 * A group of 3 passengers wants to board.
 *
 * Seat map (seat 1 to seat 12):
 * [true, false, true, true, false, false, true, false, true, false, false, true]
 *
 * Required functions:
 *  - countEmpty(seats) → how many seats are empty (use a loop)
 *  - findFirstEmptySeat(seats) → the first empty seat number (1-based).
 *    Return 0 when no seat is empty.
 *  - canBoard(emptyCount, passengerCount) → true when emptyCount >= passengerCount
 *
 * Bus message:
 *  - empty === 0              → "Sold out"
 *  - empty > 0 and empty < 3  → "Almost full"
 *  - empty >= 3               → "Seats available"
 *
 * Tasks:
 * 1. Create the three functions.
 * 2. Loop the seat map. Do not use map, filter, indexOf, or find.
 * 3. Display empty seats, first empty seat number, whether the group can board,
 *    and the bus message.
 *
 * Expected output:
 *  Empty seats: 6
 *  First empty seat: 2
 *  Can board: true
 *  Seats available
 */

const seats = [true, false, true, true, false, false, true, false, true, false, false, true];
const passengerCount = 3;

// Write your solution below.

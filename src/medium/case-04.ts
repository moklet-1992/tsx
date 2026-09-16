/**
 * Medium Case 04 — Ferry Boarding
 * Points: 140 (Medium)
 *
 * A ferry has 12 vehicle slots. true means occupied, false means empty.
 * A group of 4 vehicles wants to board.
 *
 * Slot map (slot 1 to slot 12):
 * [true, true, false, true, false, false, true, false, true, true, false, false]
 *
 * Required functions:
 *  - countEmpty(slots) → how many slots are empty (use a loop)
 *  - findFirstEmptySlot(slots) → the first empty slot number (1-based).
 *    Return 0 when no slot is empty.
 *  - canBoard(emptyCount, vehicleCount) → true when emptyCount >= vehicleCount
 *
 * Ferry message:
 *  - empty === 0              → "Sold out"
 *  - empty > 0 and empty < 4  → "Almost full"
 *  - empty >= 4               → "Slots available"
 *
 * Tasks:
 * 1. Create the three functions.
 * 2. Loop the slot map. Do not use map, filter, indexOf, or find.
 * 3. Display empty slots, first empty slot number, whether the group can board,
 *    and the ferry message.
 *
 * Expected output:
 *  Empty slots: 6
 *  First empty slot: 3
 *  Can board: true
 *  Slots available
 */

const slots = [true, true, false, true, false, false, true, false, true, true, false, false];
const vehicleCount = 4;

// Write your solution below.

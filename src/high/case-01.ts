/**
 * High Case 01 — Co-working Desk (OOP)
 * Points: 160 (High — OOP)
 *
 * A co-working space models ONE desk as a class. Create several desk
 * objects, then store them in an array. Do not create a board/manager
 * class, and do not pass an array into a constructor.
 *
 * Desk data:
 * | ID  | Floor | Occupied | Hourly Rate |
 * | --- | ----- | -------- | ----------- |
 * | D01 | 1     | No       | 25000       |
 * | D02 | 1     | Yes      | 25000       |
 * | D03 | 2     | No       | 35000       |
 * | D04 | 3     | Yes      | 45000       |
 *
 * Required class Desk (one object):
 *  - Properties: id, floor, isOccupied, hourlyRate
 *  - getLabel() → "D01-F1" style (id + "-F" + floor)
 *  - occupy() → sets isOccupied to true
 *  - release() → sets isOccupied to false
 *  - getDailyEstimate() → hourlyRate × 8
 *
 * Tasks:
 * 1. Create only the Desk class.
 * 2. Create four Desk objects with new Desk(...).
 * 3. Put them into an array: const desks = [desk1, desk2, desk3, desk4]
 * 4. Call occupy() on D03 and release() on D02.
 * 5. Display every desk using the class methods (a for...of loop is allowed).
 *
 * Expected output:
 *  D01-F1 | occupied false | daily 200000
 *  D02-F1 | occupied false | daily 200000
 *  D03-F2 | occupied true | daily 280000
 *  D04-F3 | occupied true | daily 360000
 */

// Write your solution below.

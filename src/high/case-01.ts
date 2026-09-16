/**
 * High Case 01 — Gym Locker (OOP)
 * Points: 160 (High — OOP)
 *
 * A gym models ONE locker as a class. Create several locker objects,
 * then store them in an array. Do not create a board/manager class,
 * and do not pass an array into a constructor.
 *
 * Locker data:
 * | ID  | Floor | Taken | Monthly Rate |
 * | --- | ----- | ----- | ------------ |
 * | L01 | 1     | No    | 80000        |
 * | L02 | 1     | Yes   | 80000        |
 * | L03 | 2     | No    | 100000       |
 * | L04 | 3     | Yes   | 120000       |
 *
 * Required class Locker (one object):
 *  - Properties: id, floor, isTaken, monthlyRate
 *  - getLabel() → "L01-F1" style (id + "-F" + floor)
 *  - assign() → sets isTaken to true
 *  - vacate() → sets isTaken to false
 *  - getYearlyEstimate() → monthlyRate × 12
 *
 * Tasks:
 * 1. Create only the Locker class.
 * 2. Create four Locker objects with new Locker(...).
 * 3. Put them into an array: const lockers = [locker1, locker2, locker3, locker4]
 * 4. Call assign() on L03 and vacate() on L02.
 * 5. Display every locker using the class methods (a for...of loop is allowed).
 *
 * Expected output:
 *  L01-F1 | taken false | yearly 960000
 *  L02-F1 | taken false | yearly 960000
 *  L03-F2 | taken true | yearly 1200000
 *  L04-F3 | taken true | yearly 1440000
 */

// Write your solution below.

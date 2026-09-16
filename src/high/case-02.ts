/**
 * High Case 02 — Museum Pass (OOP)
 * Points: 160 (High — OOP)
 *
 * A museum pass is one object. Create several passes, store them in
 * an array, and change state through class methods. Do not create a
 * gate class, and do not pass an array into a constructor.
 *
 * Pass data:
 * | Code | Category | Price  | Already Used |
 * | ---- | -------- | ------ | ------------ |
 * | M1   | regular  | 80000  | No           |
 * | M2   | vip      | 200000 | No           |
 * | M3   | regular  | 80000  | Yes          |
 * | M4   | vip      | 200000 | No           |
 *
 * Required class Pass (one object):
 *  - Properties: code, category, price, isUsed
 *  - getStatus() → "Used" when isUsed is true, otherwise "Valid"
 *  - markUsed() → sets isUsed to true
 *  - canEnter() → true only when the pass is not used
 *  - getRefund() → 0 when used, otherwise 40% of price
 *
 * Tasks:
 * 1. Create only the Pass class.
 * 2. Create four Pass objects with new Pass(...).
 * 3. Put them into an array: const passes = [passM1, passM2, passM3, passM4]
 * 4. Call markUsed() on M1.
 * 5. Display code, status, canEnter, and refund for every pass.
 *
 * Expected output:
 *  M1 | Used | enter false | refund 0
 *  M2 | Valid | enter true | refund 80000
 *  M3 | Used | enter false | refund 0
 *  M4 | Valid | enter true | refund 80000
 */

// Write your solution below.

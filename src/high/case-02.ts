/**
 * High Case 02 — Workshop Badge (OOP)
 * Points: 160 (High — OOP)
 *
 * A workshop badge is one object. Create several badges, store them in
 * an array, and change state through class methods. Do not create a
 * gate class, and do not pass an array into a constructor.
 *
 * Badge data:
 * | Code | Track    | Price  | Already Used |
 * | ---- | -------- | ------ | ------------ |
 * | W1   | frontend | 120000 | No           |
 * | W2   | backend  | 150000 | No           |
 * | W3   | frontend | 120000 | Yes          |
 * | W4   | backend  | 150000 | No           |
 *
 * Required class Badge (one object):
 *  - Properties: code, track, price, isUsed
 *  - getStatus() → "Used" when isUsed is true, otherwise "Valid"
 *  - markUsed() → sets isUsed to true
 *  - canEnter() → true only when the badge is not used
 *  - getRefund() → 0 when used, otherwise 30% of price
 *
 * Tasks:
 * 1. Create only the Badge class.
 * 2. Create four Badge objects with new Badge(...).
 * 3. Put them into an array: const badges = [badgeW1, badgeW2, badgeW3, badgeW4]
 * 4. Call markUsed() on W1.
 * 5. Display code, status, canEnter, and refund for every badge.
 *
 * Expected output:
 *  W1 | Used | enter false | refund 0
 *  W2 | Valid | enter true | refund 45000
 *  W3 | Used | enter false | refund 0
 *  W4 | Valid | enter true | refund 45000
 */

// Write your solution below.

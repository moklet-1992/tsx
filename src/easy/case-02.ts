/**
 * Easy Case 02 — Campus Gate Pass
 * Points: 100 (Easy)
 *
 * The campus gate must check a visitor in this exact order and stop at
 * the first failed rule:
 *  1. Visit hours must be greater than 0
 *  2. Hours already used today + this visit must not exceed the daily max
 *  3. Visit cost + vehicle fee must not exceed prepaid credit
 *
 * Vehicle fee:
 *  - Has a car → Rp5,000
 *  - No car    → Rp0
 *
 * Visit cost = visit hours × hourly rate
 *
 * If the visit is accepted:
 *  - Remaining credit = prepaid credit - visit cost - vehicle fee
 *  - Status = "Success"
 *
 * If the visit is rejected:
 *  - Remaining credit stays the same as prepaid credit
 *  - Status is one of: "Invalid hours", "Daily hours exceeded",
 *    or "Insufficient credit"
 *
 * Visitor information:
 * | Information          | Value        |
 * | -------------------- | ------------ |
 * | Visitor Name         | Doni Pratama |
 * | Prepaid Credit       | 80000        |
 * | Visit Hours          | 4            |
 * | Hours Used Today     | 3            |
 * | Daily Max Hours      | 8            |
 * | Hourly Rate          | 10000        |
 * | Has Car              | Yes          |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Determine the vehicle fee using if...else.
 * 3. Validate the visit in the required order using if...else if...else.
 * 4. Display the visitor name, vehicle fee, remaining credit, and status.
 *
 * Expected output:
 *  Visitor: Doni Pratama
 *  Vehicle fee: 5000
 *  Remaining credit: 35000
 *  Status: Success
 */

// Write your solution below.

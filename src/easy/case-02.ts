/**
 * Easy Case 02 — Canteen Meal Card
 * Points: 100 (Easy)
 *
 * The canteen cashier must check a purchase in this exact order and stop
 * at the first failed rule:
 *  1. Meal count must be greater than 0
 *  2. Meals already bought today + this order must not exceed the daily limit
 *  3. Meal cost + drink fee must not exceed the card balance
 *
 * Drink fee:
 *  - With drink → Rp4,000
 *  - No drink   → Rp0
 *
 * Meal cost = meals × 12000
 *
 * If the purchase is accepted:
 *  - New balance = card balance - meal cost - drink fee
 *  - Status = "Success"
 *
 * If the purchase is rejected:
 *  - New balance stays the same as the card balance
 *  - Status is one of: "Invalid meals", "Daily meal limit exceeded",
 *    or "Insufficient balance"
 *
 * Purchase information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Student Name      | Putri Lestari |
 * | Card Balance      | 60000         |
 * | Meals             | 3             |
 * | Meals Bought Today| 2             |
 * | Daily Meal Limit  | 6             |
 * | With Drink        | Yes           |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Determine the drink fee using if...else.
 * 3. Validate the purchase in the required order using if...else if...else.
 * 4. Display the student name, drink fee, new balance, and status.
 *
 * Expected output:
 *  Student: Putri Lestari
 *  Drink fee: 4000
 *  New balance: 20000
 *  Status: Success
 */

// Write your solution below.

/**
 * Easy Case 03 — Fire Station Call
 * Points: 100 (Easy)
 *
 * A fire station assigns a code and a dispatch fee from a call.
 * Check the rules from top to bottom and use the first match.
 *
 * | Condition                                          | Code        | Fee    |
 * | -------------------------------------------------- | ----------- | ------ |
 * | Building fire is true, OR there is a gas leak      | Code Red    | 300000 |
 * | Injury count is at least 1, OR someone is trapped  | Code Yellow | 180000 |
 * | Any other case                                     | Code Green  | 70000  |
 *
 * Call information:
 * | Information    | Value         |
 * | -------------- | ------------- |
 * | Caller Name    | Haris Nugroho |
 * | Building Fire  | No            |
 * | Gas Leak       | No            |
 * | Injury Count   | 0             |
 * | Person Trapped | Yes           |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Decide the code using if...else if...else and logical operators.
 * 3. Set the dispatch fee from the matched code.
 * 4. Display the caller name, code, fee, and a short reason:
 *    - Code Red    → "Send full crew"
 *    - Code Yellow → "Send rescue team"
 *    - Code Green  → "Stand by at station"
 *
 * Expected output:
 *  Caller: Haris Nugroho
 *  Code: Code Yellow
 *  Fee: 180000
 *  Send rescue team
 */

// Write your solution below.

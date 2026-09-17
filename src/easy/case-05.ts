/**
 * Easy Case 05 — Laptop Insurance Claim
 * Points: 100 (Easy)
 *
 * An insurer approves a laptop claim only when ALL of these rules are true:
 *  - The policy has been active for at least 2 months
 *  - The claim amount is greater than the excess fee
 *  - If the laptop is lost, a police report must exist
 *    (broken-device claims do not need a police report)
 *
 * If approved:
 *  - Payout = claim amount - excess fee
 *  - Status = "Approved"
 *
 * If rejected:
 *  - Payout = 0
 *  - Status = "Rejected"
 *
 * Claim information:
 * | Information       | Value        |
 * | ----------------- | ------------ |
 * | Owner Name        | Yoga Pratama |
 * | Policy Months     | 6            |
 * | Claim Amount      | 4500000      |
 * | Excess Fee        | 500000       |
 * | Is Lost           | Yes          |
 * | Has Police Report | Yes          |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Write the lost-item rule so it is required only when the laptop is lost.
 *    Hint: !isLost || hasPoliceReport
 * 3. Combine every approval rule with logical operators.
 * 4. Calculate the payout and display the owner name, payout, and status.
 *
 * Expected output:
 *  Owner: Yoga Pratama
 *  Payout: 4000000
 *  Status: Approved
 */

// Write your solution below.

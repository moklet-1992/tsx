/**
 * Easy Case 05 — Travel Insurance Claim
 * Points: 100 (Easy)
 *
 * An insurance office approves a claim only when ALL of these rules are true:
 *  - The policy has been active for at least 3 months
 *  - The claim amount is greater than the deductible
 *  - If the claim is a theft case, a police report must exist
 *    (non-theft claims do not need a police report)
 *
 * If approved:
 *  - Payout = claim amount - deductible
 *  - Status = "Approved"
 *
 * If rejected:
 *  - Payout = 0
 *  - Status = "Rejected"
 *
 * Claim information:
 * | Information         | Value            |
 * | ------------------- | ---------------- |
 * | Claimant Name       | Prabowo Subianto |
 * | Policy Active Months| 5                |
 * | Claim Amount        | 2000000          |
 * | Deductible          | 500000           |
 * | Is Theft            | Yes              |
 * | Has Police Report   | Yes              |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Write the theft rule so it is required only when the claim is theft.
 *    Hint: !isTheft || hasPoliceReport
 * 3. Combine every approval rule with logical operators.
 * 4. Calculate the payout and display the claimant name, payout, and status.
 *
 * Expected output:
 *  Claimant: Prabowo Subianto
 *  Payout: 1500000
 *  Status: Approved
 */

// Write your solution below.

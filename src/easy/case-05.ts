/**
 * Easy Case 05 — Camera Rental Damage Claim
 * Points: 100 (Easy)
 *
 * A rental shop approves a camera claim only when ALL of these rules
 * are true:
 *  - Rental days are at least 1
 *  - The claim amount is greater than the handling fee
 *  - If the camera is stolen, a police report must exist
 *    (broken-camera claims do not need a police report)
 *
 * If approved:
 *  - Payout = claim amount - handling fee
 *  - Status = "Approved"
 *
 * If rejected:
 *  - Payout = 0
 *  - Status = "Rejected"
 *
 * Claim information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Renter Name       | Reza Mahendra |
 * | Rental Days       | 3             |
 * | Claim Amount      | 2800000       |
 * | Handling Fee      | 400000        |
 * | Is Stolen         | Yes           |
 * | Has Police Report | Yes           |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Write the stolen-item rule so it is required only when the camera is stolen.
 *    Hint: !isStolen || hasPoliceReport
 * 3. Combine every approval rule with logical operators.
 * 4. Calculate the payout and display the renter name, payout, and status.
 *
 * Expected output:
 *  Renter: Reza Mahendra
 *  Payout: 2400000
 *  Status: Approved
 */

// Write your solution below.

/**
 * Easy Case 05 — Phone Warranty Claim
 * Points: 100 (Easy)
 *
 * A service center approves a warranty claim only when ALL of these
 * rules are true:
 *  - The device is at most 12 months old
 *  - The claim amount is greater than the service fee
 *  - If the claim is water damage, waterproof proof must exist
 *    (non-water claims do not need waterproof proof)
 *
 * If approved:
 *  - Payout = claim amount - service fee
 *  - Status = "Approved"
 *
 * If rejected:
 *  - Payout = 0
 *  - Status = "Rejected"
 *
 * Claim information:
 * | Information       | Value        |
 * | ----------------- | ------------ |
 * | Customer Name     | Maya Kartika |
 * | Device Age Months | 8            |
 * | Claim Amount      | 1500000      |
 * | Service Fee       | 250000       |
 * | Is Water Damage   | Yes          |
 * | Has Waterproof Proof | Yes       |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Write the water-damage rule so it is required only for water damage.
 *    Hint: !isWaterDamage || hasWaterproofProof
 * 3. Combine every approval rule with logical operators.
 * 4. Calculate the payout and display the customer name, payout, and status.
 *
 * Expected output:
 *  Customer: Maya Kartika
 *  Payout: 1250000
 *  Status: Approved
 */

// Write your solution below.

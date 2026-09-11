/**
 * Easy Case 04 — Same-Day Courier
 * Points: 100 (Easy)
 *
 * A courier service first checks coverage, then builds the fee from several
 * parts.
 *
 * Coverage:
 *  - Distance greater than 25 km → status "Out of coverage" and total fee 0
 *  - Otherwise → status "Accepted" and calculate the fee below
 *
 * Fee parts when accepted:
 *  - Base fee = 8000
 *  - Distance fee = distance × 2500
 *  - Weight fee = weight × 1500
 *  - COD fee = 5000 if cash-on-delivery, otherwise 0
 *  - Rain fee = 4000 if it is raining, otherwise 0
 *  - Same-day fee = 10000 if same-day delivery, otherwise 0
 *  - Total fee = all parts added together
 *
 * Delivery information:
 * | Information     | Value            |
 * | --------------- | ---------------- |
 * | Sender Name     | Luhut Panjaitan  |
 * | Distance (km)   | 18               |
 * | Weight (kg)     | 4                |
 * | Cash on Delivery| Yes              |
 * | Is Raining      | Yes              |
 * | Same-Day        | Yes              |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Reject the delivery when it is out of coverage.
 * 3. If accepted, calculate every fee part, then the total.
 * 4. Display the sender name, each fee part, total fee, and status.
 *
 * Expected output:
 *  Sender: Luhut Panjaitan
 *  Base fee: 8000
 *  Distance fee: 45000
 *  Weight fee: 6000
 *  COD fee: 5000
 *  Rain fee: 4000
 *  Same-day fee: 10000
 *  Total fee: 78000
 *  Status: Accepted
 */

// Write your solution below.

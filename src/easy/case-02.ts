/**
 * Easy Case 02 — Library Print Quota
 * Points: 100 (Easy)
 *
 * The library printer must check a job in this exact order and stop at
 * the first failed rule:
 *  1. Page count must be greater than 0
 *  2. Pages already printed today + this job must not exceed the daily limit
 *  3. Job cost + color fee must not exceed remaining quota
 *
 * Color fee:
 *  - Color print → Rp2,000
 *  - Black and white → Rp0
 *
 * Job cost = pages × 200
 *
 * If the job is accepted:
 *  - Remaining quota = current quota - job cost - color fee
 *  - Status = "Success"
 *
 * If the job is rejected:
 *  - Remaining quota stays the same
 *  - Status is one of: "Invalid pages", "Daily page limit exceeded",
 *    or "Insufficient quota"
 *
 * Job information:
 * | Information          | Value      |
 * | -------------------- | ---------- |
 * | Student Name         | Bima Sakti |
 * | Remaining Quota      | 25000      |
 * | Pages                | 40         |
 * | Pages Printed Today  | 30         |
 * | Daily Page Limit     | 80         |
 * | Color Print          | Yes        |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Determine the color fee using if...else.
 * 3. Validate the job in the required order using if...else if...else.
 * 4. Display the student name, color fee, remaining quota, and status.
 *
 * Expected output:
 *  Student: Bima Sakti
 *  Color fee: 2000
 *  Remaining quota: 15000
 *  Status: Success
 */

// Write your solution below.

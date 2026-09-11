/**
 * Easy Case 01 — Blood Donation Screening
 * Points: 100 (Easy)
 *
 * A city blood center accepts a donor only when ALL of these rules are true:
 *  - Age is from 17 to 60 (inclusive)
 *  - Weight is at least 50 kg
 *  - Hemoglobin is at least 12.5
 *  - Days since the last donation is at least 84
 *  - The donor feels healthy today
 *
 * If the donor is eligible, choose the donation type:
 *  - Hemoglobin is 14.0 or more → "Double Red Cell"
 *  - Otherwise → "Whole Blood"
 *
 * If the donor is not eligible:
 *  - Donation type is "None"
 *
 * Donor information:
 * | Information              | Value        |
 * | ------------------------ | ------------ |
 * | Donor Name               | Joko Widodo  |
 * | Age                      | 22           |
 * | Weight (kg)              | 54           |
 * | Hemoglobin               | 13.2         |
 * | Days Since Last Donation | 90           |
 * | Feels Healthy            | Yes          |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Combine every eligibility rule with logical operators.
 * 3. If eligible, decide the donation type with a nested if...else.
 * 4. Display the donor name, eligibility (true/false), donation type, and
 *    one of these messages:
 *    - "Eligible to donate"
 *    - "Not eligible to donate"
 *
 * Expected output:
 *  Donor: Joko Widodo
 *  Eligible: true
 *  Donation type: Whole Blood
 *  Eligible to donate
 */

// Write your solution below.

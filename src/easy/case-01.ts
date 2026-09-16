/**
 * Easy Case 01 — Dive Fitness Screening
 * Points: 100 (Easy)
 *
 * A dive shop accepts a diver only when ALL of these rules are true:
 *  - Age is from 16 to 55 (inclusive)
 *  - Certification age is at least 30 days
 *  - Resting heart rate is at most 90
 *  - Days since the last dive is at least 1
 *  - The diver feels fit today
 *
 * If the diver is eligible, choose the tank type:
 *  - Heart rate is 70 or less → "Nitrox"
 *  - Otherwise → "Standard Air"
 *
 * If the diver is not eligible:
 *  - Tank type is "None"
 *
 * Diver information:
 * | Information           | Value     |
 * | --------------------- | --------- |
 * | Diver Name            | Rina Sari |
 * | Age                   | 28        |
 * | Certification Days    | 45        |
 * | Resting Heart Rate    | 76        |
 * | Days Since Last Dive  | 3         |
 * | Feels Fit             | Yes       |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Combine every eligibility rule with logical operators.
 * 3. If eligible, decide the tank type with a nested if...else.
 * 4. Display the diver name, eligibility (true/false), tank type, and
 *    one of these messages:
 *    - "Eligible to dive"
 *    - "Not eligible to dive"
 *
 * Expected output:
 *  Diver: Rina Sari
 *  Eligible: true
 *  Tank type: Standard Air
 *  Eligible to dive
 */

// Write your solution below.

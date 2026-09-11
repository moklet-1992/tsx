/**
 * Easy Case 03 — Clinic Triage
 * Points: 100 (Easy)
 *
 * A clinic assigns a priority and a consultation fee from the patient's
 * vital signs. Check the rules from top to bottom and use the first match.
 *
 * | Condition                                         | Priority  | Fee    |
 * | ------------------------------------------------- | --------- | ------ |
 * | Oxygen is below 90, OR the patient has chest pain | Emergency | 150000 |
 * | Temperature is 38.5 or more, OR oxygen is below 95| Urgent    | 100000 |
 * | Any other case                                    | Normal    | 50000  |
 *
 * Patient information:
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Patient Name    | Puan Maharani |
 * | Temperature (°C)| 38.7          |
 * | Oxygen (%)      | 94            |
 * | Has Chest Pain  | No            |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Decide the priority using if...else if...else and logical operators.
 * 3. Set the consultation fee from the matched priority.
 * 4. Display the patient name, priority, fee, and a short reason:
 *    - Emergency → "Critical signs detected"
 *    - Urgent    → "Needs prompt examination"
 *    - Normal    → "Stable condition"
 *
 * Expected output:
 *  Patient: Puan Maharani
 *  Priority: Urgent
 *  Fee: 100000
 *  Needs prompt examination
 */

// Write your solution below.

/**
 * Easy Case 03 — Warehouse Incident Priority
 * Points: 100 (Easy)
 *
 * A warehouse assigns a priority and a response fee from an incident.
 * Check the rules from top to bottom and use the first match.
 *
 * | Condition                                         | Priority | Fee    |
 * | ------------------------------------------------- | -------- | ------ |
 * | Fire alarm is on, OR there is a chemical leak     | Hazard   | 250000 |
 * | Injury count is at least 1, OR a machine stopped  | Urgent   | 150000 |
 * | Any other case                                    | Routine  | 50000  |
 *
 * Incident information:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Reporter Name  | Eko Santoso |
 * | Fire Alarm     | No          |
 * | Chemical Leak  | No          |
 * | Injury Count   | 1           |
 * | Machine Stopped| No          |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Decide the priority using if...else if...else and logical operators.
 * 3. Set the response fee from the matched priority.
 * 4. Display the reporter name, priority, fee, and a short reason:
 *    - Hazard  → "Clear the area now"
 *    - Urgent  → "Dispatch supervisor"
 *    - Routine → "Log for morning review"
 *
 * Expected output:
 *  Reporter: Eko Santoso
 *  Priority: Urgent
 *  Fee: 150000
 *  Dispatch supervisor
 */

// Write your solution below.

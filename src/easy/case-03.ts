/**
 * Easy Case 03 — Helpdesk Priority
 * Points: 100 (Easy)
 *
 * A helpdesk assigns a priority and an on-site fee from the ticket.
 * Check the rules from top to bottom and use the first match.
 *
 * | Condition                                              | Priority | Fee    |
 * | ------------------------------------------------------ | -------- | ------ |
 * | System is down, OR there is a security breach          | Critical | 200000 |
 * | Requested response is under 4 hours, OR the client is VIP | High  | 120000 |
 * | Any other case                                         | Normal   | 60000  |
 *
 * Ticket information:
 * | Information              | Value     |
 * | ------------------------ | --------- |
 * | Client Name              | Sari Dewi |
 * | System Down              | No        |
 * | Security Breach          | No        |
 * | Requested Response Hours | 3         |
 * | Is VIP                   | No        |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Decide the priority using if...else if...else and logical operators.
 * 3. Set the on-site fee from the matched priority.
 * 4. Display the client name, priority, fee, and a short reason:
 *    - Critical → "Immediate action required"
 *    - High     → "Needs fast handling"
 *    - Normal   → "Queued for regular support"
 *
 * Expected output:
 *  Client: Sari Dewi
 *  Priority: High
 *  Fee: 120000
 *  Needs fast handling
 */

// Write your solution below.

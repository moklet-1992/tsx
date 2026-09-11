/**
 * High Case 02 — Concert Ticket (OOP)
 * Points: 160 (High — OOP)
 *
 * A concert ticket is one object. Create several tickets, store them in
 * an array, and change state through class methods. Do not create a gate
 * class, and do not pass an array into a constructor.
 *
 * Ticket data:
 * | Code | Category | Price  | Already Used |
 * | ---- | -------- | ------ | ------------ |
 * | A1   | regular  | 150000 | No           |
 * | A2   | vip      | 350000 | No           |
 * | A3   | regular  | 150000 | Yes          |
 * | A4   | vip      | 350000 | No           |
 *
 * Required class Ticket (one object):
 *  - Properties: code, category, price, isUsed
 *  - getStatus() → "Used" when isUsed is true, otherwise "Valid"
 *  - markUsed() → sets isUsed to true
 *  - canEnter() → true only when the ticket is not used
 *  - getRefund() → 0 when used, otherwise 50% of price
 *
 * Tasks:
 * 1. Create only the Ticket class.
 * 2. Create four Ticket objects with new Ticket(...).
 * 3. Put them into an array: const tickets = [ticketA1, ticketA2, ticketA3, ticketA4]
 * 4. Call markUsed() on A1.
 * 5. Display code, status, canEnter, and refund for every ticket.
 *
 * Expected output:
 *  A1 | Used | enter false | refund 0
 *  A2 | Valid | enter true | refund 175000
 *  A3 | Used | enter false | refund 0
 *  A4 | Valid | enter true | refund 175000
 */

// Write your solution below.

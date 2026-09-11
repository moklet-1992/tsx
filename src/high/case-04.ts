/**
 * High Case 04 — EV Charging Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the session list with map, filter, reduce, and find.
 *
 * Only completed sessions are billed.
 *  - Energy fee = kWh × 2500
 *  - Idle fee   = (minutes - 60) × 200, only when minutes > 60
 *  - Members receive 10% off energy fee + idle fee
 *  - Incomplete sessions have fee 0
 *
 * Required array methods:
 *  - filter → completed sessions
 *  - map    → invoices { id, fee }
 *  - reduce → total revenue of completed sessions
 *  - find   → the completed session with the most minutes
 *
 * Tasks:
 * 1. Write a function getFee(session) for the rules above.
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display each completed invoice, member session ids, longest id,
 *    and total revenue.
 *
 * Expected output:
 *  C1: 27000
 *  C2: 54000
 *  C4: 35550
 *  C5: 68500
 *  Member sessions: C1, C4
 *  Longest session: C5
 *  Total revenue: 185050
 */

const sessions = [
  { id: "C1", kWh: 12, minutes: 45, isMember: true, isCompleted: true },
  { id: "C2", kWh: 20, minutes: 80, isMember: false, isCompleted: true },
  { id: "C3", kWh: 8, minutes: 30, isMember: true, isCompleted: false },
  { id: "C4", kWh: 15, minutes: 70, isMember: true, isCompleted: true },
  { id: "C5", kWh: 25, minutes: 90, isMember: false, isCompleted: true },
];

// Write your solution below.

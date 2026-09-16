/**
 * High Case 04 — Language Course Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the session list with map, filter, reduce, and find.
 *
 * Only completed sessions are billed.
 *  - Lesson fee = hours × 35000
 *  - Extra fee  = (extraMin - 15) × 400, only when extraMin > 15
 *  - Members receive 10% off lesson fee + extra fee
 *  - An incomplete session has fee 0
 *
 * Required array methods:
 *  - filter → completed sessions
 *  - map    → invoices { id, fee }
 *  - reduce → total revenue of completed sessions
 *  - find   → the completed session with the most extraMin
 *
 * Tasks:
 * 1. Write a function getFee(session) for the rules above.
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display each completed invoice, member session ids, longest id,
 *    and total revenue.
 *
 * Expected output:
 *  E1: 252000
 *  E2: 424000
 *  E4: 316800
 *  E5: 500000
 *  Member sessions: E1, E4
 *  Longest session: E5
 *  Total revenue: 1492800
 */

const sessions = [
  { id: "E1", hours: 8, extraMin: 10, isMember: true, isCompleted: true },
  { id: "E2", hours: 12, extraMin: 25, isMember: false, isCompleted: true },
  { id: "E3", hours: 6, extraMin: 5, isMember: true, isCompleted: false },
  { id: "E4", hours: 10, extraMin: 20, isMember: true, isCompleted: true },
  { id: "E5", hours: 14, extraMin: 40, isMember: false, isCompleted: true },
];

// Write your solution below.

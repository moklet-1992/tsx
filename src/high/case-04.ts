/**
 * High Case 04 — Photo Studio Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the order list with map, filter, reduce, and find.
 *
 * Only completed orders are billed.
 *  - Print fee = prints × 8000
 *  - Rush fee  = (rushHours - 4) × 1500, only when rushHours > 4
 *  - Members receive 15% off print fee + rush fee
 *  - An incomplete order has fee 0
 *
 * Required array methods:
 *  - filter → completed orders
 *  - map    → invoices { id, fee }
 *  - reduce → total revenue of completed orders
 *  - find   → the completed order with the most rushHours
 *
 * Tasks:
 * 1. Write a function getFee(order) for the rules above.
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display each completed invoice, member order ids, longest id,
 *    and total revenue.
 *
 * Expected output:
 *  P1: 68000
 *  P2: 164500
 *  P4: 104550
 *  P5: 209000
 *  Member orders: P1, P4
 *  Longest order: P5
 *  Total revenue: 546050
 */

const orders = [
  { id: "P1", prints: 10, rushHours: 3, isMember: true, isCompleted: true },
  { id: "P2", prints: 20, rushHours: 7, isMember: false, isCompleted: true },
  { id: "P3", prints: 8, rushHours: 2, isMember: true, isCompleted: false },
  { id: "P4", prints: 15, rushHours: 6, isMember: true, isCompleted: true },
  { id: "P5", prints: 25, rushHours: 10, isMember: false, isCompleted: true },
];

// Write your solution below.

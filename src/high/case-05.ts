/**
 * High Case 05 — Repair Ticket Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the ticket list with map, filter, reduce, some, and every.
 *
 * Fee rules:
 *  - Base fee = 15000
 *  - Parts fee = parts × 2500
 *  - Zone surcharge: local 0, city 6000, upcountry 11000
 *  - Urgent extra = 8000 when isUrgent is true
 *
 * Required array methods:
 *  - map    → add a fee field to every ticket
 *  - filter → open tickets (not closed)
 *  - filter → open and urgent
 *  - reduce → total fee of open tickets
 *  - some   → an open ticket is upcountry
 *  - every  → every local ticket is closed
 *
 * Tasks:
 * 1. Write functions getZoneSurcharge(zone) and getFee(ticket).
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display open codes, urgent open codes, total open fee,
 *    upcountry open, and all local closed.
 *
 * Expected output:
 *  Open: T1, T2, T4, T6
 *  Urgent open: T2, T4
 *  Total open fee: 189000
 *  Upcountry open: true
 *  All local closed: false
 */

const tickets = [
  { tracking: "T1", parts: 4, zone: "local", isUrgent: false, isClosed: false },
  { tracking: "T2", parts: 10, zone: "city", isUrgent: true, isClosed: false },
  { tracking: "T3", parts: 6, zone: "local", isUrgent: false, isClosed: true },
  { tracking: "T4", parts: 14, zone: "upcountry", isUrgent: true, isClosed: false },
  { tracking: "T5", parts: 3, zone: "local", isUrgent: false, isClosed: true },
  { tracking: "T6", parts: 8, zone: "city", isUrgent: false, isClosed: false },
];

// Write your solution below.

/**
 * High Case 05 — Lost Baggage Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the claim list with map, filter, reduce, some, and every.
 *
 * Fee rules:
 *  - Base fee = 10000
 *  - Weight fee = kg × 2000
 *  - Zone surcharge: domestic 0, international 8000, remote 15000
 *  - Priority extra = 9000 when isPriority is true
 *
 * Required array methods:
 *  - map    → add a fee field to every claim
 *  - filter → pending claims (not settled)
 *  - filter → pending and priority
 *  - reduce → total fee of pending claims
 *  - some   → a pending claim is remote
 *  - every  → every domestic claim is settled
 *
 * Tasks:
 * 1. Write functions getZoneSurcharge(zone) and getFee(claim).
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display pending codes, priority pending codes, total pending fee,
 *    remote pending, and all domestic settled.
 *
 * Expected output:
 *  Pending: B1, B2, B4, B6
 *  Priority pending: B2, B4
 *  Total pending fee: 203000
 *  Remote pending: true
 *  All domestic settled: false
 */

const claims = [
  { tracking: "B1", kg: 8, zone: "domestic", isPriority: false, isSettled: false },
  { tracking: "B2", kg: 15, zone: "international", isPriority: true, isSettled: false },
  { tracking: "B3", kg: 10, zone: "domestic", isPriority: false, isSettled: true },
  { tracking: "B4", kg: 22, zone: "remote", isPriority: true, isSettled: false },
  { tracking: "B5", kg: 6, zone: "domestic", isPriority: false, isSettled: true },
  { tracking: "B6", kg: 12, zone: "international", isPriority: false, isSettled: false },
];

// Write your solution below.

/**
 * High Case 05 — Parcel Dispatch Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the parcel list with map, filter, reduce, some, and every.
 *
 * Fee rules:
 *  - Base fee = 8000
 *  - Weight fee = weight × 1500
 *  - Zone surcharge: city 0, outskirts 5000, remote 12000
 *  - Priority extra = 7000 when isPriority is true
 *
 * Required array methods:
 *  - map    → add a fee field to every parcel
 *  - filter → pending parcels (not delivered)
 *  - filter → pending and priority
 *  - reduce → total fee of pending parcels
 *  - some   → a pending parcel is remote
 *  - every  → every city parcel is delivered
 *
 * Tasks:
 * 1. Write functions getZoneSurcharge(zone) and getFee(parcel).
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display pending codes, priority pending codes, total pending fee,
 *    remote pending, and all city delivered.
 *
 * Expected output:
 *  Pending: P1, P2, P4, P6
 *  Priority pending: P2, P4
 *  Total pending fee: 96500
 *  Remote pending: true
 *  All city delivered: false
 */

const parcels = [
  { tracking: "P1", weight: 2, zone: "city", isPriority: false, isDelivered: false },
  { tracking: "P2", weight: 5, zone: "outskirts", isPriority: true, isDelivered: false },
  { tracking: "P3", weight: 3, zone: "city", isPriority: false, isDelivered: true },
  { tracking: "P4", weight: 8, zone: "remote", isPriority: true, isDelivered: false },
  { tracking: "P5", weight: 1, zone: "city", isPriority: false, isDelivered: true },
  { tracking: "P6", weight: 4, zone: "outskirts", isPriority: false, isDelivered: false },
];

// Write your solution below.

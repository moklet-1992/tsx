/**
 * High Case 06 — Photo Studio Booking Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the studio list with map, filter, reduce, and every.
 *
 * Bill rules:
 *  - Standard → (200000 × hours) + (40000 × extraLamps)
 *  - Premium  → (450000 × hours) + 120000 when a backdrop is included
 *
 * Required array methods:
 *  - filter → occupied studios
 *  - filter + map → vacant studio numbers
 *  - map    → { roomNo, bill } for occupied studios
 *  - reduce → total revenue of occupied studios
 *  - filter + map → vacant premium studio numbers
 *  - every  → every occupied bill is at least 300000
 *
 * Tasks:
 * 1. Write a function getBill(studio) for the rules above.
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display vacant studios, each occupied bill, vacant premium studios,
 *    total revenue, and the every-check.
 *
 * Expected output:
 *  Vacant studios: 102, 203
 *  101: 920000
 *  201: 1020000
 *  202: 1350000
 *  103: 240000
 *  Vacant premium: 203
 *  Total revenue: 3530000
 *  All occupied above 300000: false
 */

const studios = [
  { roomNo: "101", type: "standard", isOccupied: true, hours: 4, extraLamps: 3, hasBackdrop: false },
  { roomNo: "102", type: "standard", isOccupied: false, hours: 0, extraLamps: 0, hasBackdrop: false },
  { roomNo: "201", type: "premium", isOccupied: true, hours: 2, extraLamps: 0, hasBackdrop: true },
  { roomNo: "202", type: "premium", isOccupied: true, hours: 3, extraLamps: 0, hasBackdrop: false },
  { roomNo: "103", type: "standard", isOccupied: true, hours: 1, extraLamps: 1, hasBackdrop: false },
  { roomNo: "203", type: "premium", isOccupied: false, hours: 2, extraLamps: 0, hasBackdrop: false },
];

// Write your solution below.

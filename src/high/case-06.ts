/**
 * High Case 06 — Meeting Room Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the room list with map, filter, reduce, and every.
 *
 * Bill rules:
 *  - Standard → (300000 × hours) + (50000 × extraGuests)
 *  - Suite    → (700000 × hours) + 200000 when catering is included
 *
 * Required array methods:
 *  - filter → occupied rooms
 *  - filter + map → vacant room numbers
 *  - map    → { roomNo, bill } for occupied rooms
 *  - reduce → total revenue of occupied rooms
 *  - filter + map → vacant suite room numbers
 *  - every  → every occupied bill is at least 400000
 *
 * Tasks:
 * 1. Write a function getBill(room) for the rules above.
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display vacant rooms, each occupied bill, vacant suites,
 *    total revenue, and the every-check.
 *
 * Expected output:
 *  Vacant rooms: 102, 203
 *  101: 1000000
 *  201: 1600000
 *  202: 2800000
 *  103: 350000
 *  Vacant suites: 203
 *  Total revenue: 5750000
 *  All occupied above 400000: false
 */

const rooms = [
  { roomNo: "101", type: "standard", isOccupied: true, hours: 3, extraGuests: 2, hasCatering: false },
  { roomNo: "102", type: "standard", isOccupied: false, hours: 0, extraGuests: 0, hasCatering: false },
  { roomNo: "201", type: "suite", isOccupied: true, hours: 2, extraGuests: 0, hasCatering: true },
  { roomNo: "202", type: "suite", isOccupied: true, hours: 4, extraGuests: 0, hasCatering: false },
  { roomNo: "103", type: "standard", isOccupied: true, hours: 1, extraGuests: 1, hasCatering: false },
  { roomNo: "203", type: "suite", isOccupied: false, hours: 2, extraGuests: 0, hasCatering: false },
];

// Write your solution below.

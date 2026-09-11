/**
 * High Case 06 — Hotel Night Report (Array methods)
 * Points: 160 (High — Array methods)
 *
 * This case is about array methods only. Do not create a class.
 * Work directly on the room list with map, filter, reduce, and every.
 *
 * Bill rules:
 *  - Standard → (450000 × nights) + (75000 × breakfastCount)
 *  - Suite    → (900000 × nights) + 150000 when late checkout
 *
 * Required array methods:
 *  - filter → occupied rooms
 *  - filter + map → vacant room numbers
 *  - map    → { roomNo, bill } for occupied rooms
 *  - reduce → total revenue of occupied rooms
 *  - filter + map → vacant suite room numbers
 *  - every  → every occupied bill is at least 600000
 *
 * Tasks:
 * 1. Write a function getBill(room) for the rules above.
 * 2. Build the report with the array methods. Do not use a for loop.
 * 3. Display vacant rooms, each occupied bill, vacant suites,
 *    total revenue, and the every-check.
 *
 * Expected output:
 *  Vacant rooms: 102, 203
 *  101: 1050000
 *  201: 1050000
 *  202: 2700000
 *  103: 525000
 *  Vacant suites: 203
 *  Total revenue: 5325000
 *  All occupied above 600000: false
 */

const rooms = [
  { roomNo: "101", type: "standard", isOccupied: true, nights: 2, breakfastCount: 2, hasLateCheckout: false },
  { roomNo: "102", type: "standard", isOccupied: false, nights: 0, breakfastCount: 0, hasLateCheckout: false },
  { roomNo: "201", type: "suite", isOccupied: true, nights: 1, breakfastCount: 0, hasLateCheckout: true },
  { roomNo: "202", type: "suite", isOccupied: true, nights: 3, breakfastCount: 0, hasLateCheckout: false },
  { roomNo: "103", type: "standard", isOccupied: true, nights: 1, breakfastCount: 1, hasLateCheckout: false },
  { roomNo: "203", type: "suite", isOccupied: false, nights: 2, breakfastCount: 0, hasLateCheckout: false },
];

// Write your solution below.

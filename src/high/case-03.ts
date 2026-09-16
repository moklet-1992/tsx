/**
 * High Case 03 — Delivery Crew (OOP)
 * Points: 160 (High — OOP)
 *
 * Riders and dispatchers are different objects that share a parent class.
 * Create each person with new, then store them in one array. Do not
 * create a roster/manager class, and do not pass an array into a constructor.
 *
 * Crew data:
 * | Name  | Role       | Hours | Extra            |
 * | ----- | ---------- | ----- | ---------------- |
 * | Maya  | Rider      | 36    | 10 night drops   |
 * | Raka  | Rider      | 30    | 0 night drops    |
 * | Lina  | Dispatcher | 20    | Weekend duty     |
 * | Budi  | Dispatcher | 18    | Not weekend      |
 * | Sinta | Rider      | 40    | 8 night drops    |
 *
 * Pay rules:
 *  - StaffMember.getPay() → hours × 40000
 *  - Rider.getPay()       → hours × 40000 + nightDrops × 15000
 *  - Dispatcher.getPay()  → hours × 70000 + 250000 when weekend duty
 *
 * Required class StaffMember (one person):
 *  - Properties: name, hours
 *  - getRole() → "Staff"
 *  - getPay() → hours × 40000
 *
 * Required class Rider extends StaffMember:
 *  - Extra property: nightDrops
 *  - getRole() → "Rider"
 *  - Override getPay()
 *
 * Required class Dispatcher extends StaffMember:
 *  - Extra property: isWeekend
 *  - getRole() → "Dispatcher"
 *  - Override getPay()
 *
 * Tasks:
 * 1. Create the three classes. Do not create a fourth collection class.
 * 2. Create each crew member with new Rider(...) or new Dispatcher(...).
 * 3. Put them into an array:
 *    const crew = [maya, raka, lina, budi, sinta]
 * 4. Display role, name, and pay for every person (a for...of loop is allowed).
 *
 * Expected output:
 *  Rider Maya: 1590000
 *  Rider Raka: 1200000
 *  Dispatcher Lina: 1650000
 *  Dispatcher Budi: 1260000
 *  Rider Sinta: 1720000
 */

// Write your solution below.

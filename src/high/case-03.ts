/**
 * High Case 03 — Radio Station Crew (OOP)
 * Points: 160 (High — OOP)
 *
 * Hosts and engineers are different objects that share a parent class.
 * Create each person with new, then store them in one array. Do not
 * create a roster/manager class, and do not pass an array into a constructor.
 *
 * Crew data:
 * | Name  | Role     | Hours | Extra          |
 * | ----- | -------- | ----- | -------------- |
 * | Maya  | Host     | 28    | 6 live hours   |
 * | Raka  | Host     | 24    | 0 live hours   |
 * | Lina  | Engineer | 16    | Night shift    |
 * | Budi  | Engineer | 20    | Not night      |
 * | Sinta | Host     | 32    | 4 live hours   |
 *
 * Pay rules:
 *  - StaffMember.getPay() → hours × 35000
 *  - Host.getPay()        → hours × 35000 + liveHours × 20000
 *  - Engineer.getPay()    → hours × 55000 + 180000 when night shift
 *
 * Required class StaffMember (one person):
 *  - Properties: name, hours
 *  - getRole() → "Staff"
 *  - getPay() → hours × 35000
 *
 * Required class Host extends StaffMember:
 *  - Extra property: liveHours
 *  - getRole() → "Host"
 *  - Override getPay()
 *
 * Required class Engineer extends StaffMember:
 *  - Extra property: isNight
 *  - getRole() → "Engineer"
 *  - Override getPay()
 *
 * Tasks:
 * 1. Create the three classes. Do not create a fourth collection class.
 * 2. Create each crew member with new Host(...) or new Engineer(...).
 * 3. Put them into an array:
 *    const crew = [maya, raka, lina, budi, sinta]
 * 4. Display role, name, and pay for every person (a for...of loop is allowed).
 *
 * Expected output:
 *  Host Maya: 1100000
 *  Host Raka: 840000
 *  Engineer Lina: 1060000
 *  Engineer Budi: 1100000
 *  Host Sinta: 1200000
 */

// Write your solution below.

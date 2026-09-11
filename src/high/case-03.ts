/**
 * High Case 03 — Clinic Staff (OOP)
 * Points: 160 (High — OOP)
 *
 * Nurses and doctors are different objects that share a parent class.
 * Create each person with new, then store them in one array. Do not
 * create a roster/manager class, and do not pass an array into a constructor.
 *
 * Staff data:
 * | Name  | Role   | Hours | Extra          |
 * | ----- | ------ | ----- | -------------- |
 * | Maya  | Nurse  | 40    | 8 night hours  |
 * | Raka  | Nurse  | 36    | 0 night hours  |
 * | Lina  | Doctor | 20    | On call        |
 * | Budi  | Doctor | 16    | Not on call    |
 * | Sinta | Nurse  | 42    | 12 night hours |
 *
 * Pay rules:
 *  - StaffMember.getPay() → hours × 50000
 *  - Nurse.getPay()       → hours × 50000 + nightHours × 25000
 *  - Doctor.getPay()      → hours × 120000 + 400000 when on call
 *
 * Required class StaffMember (one person):
 *  - Properties: name, hours
 *  - getRole() → "Staff"
 *  - getPay() → hours × 50000
 *
 * Required class Nurse extends StaffMember:
 *  - Extra property: nightHours
 *  - getRole() → "Nurse"
 *  - Override getPay()
 *
 * Required class Doctor extends StaffMember:
 *  - Extra property: isOnCall
 *  - getRole() → "Doctor"
 *  - Override getPay()
 *
 * Tasks:
 * 1. Create the three classes. Do not create a fourth collection class.
 * 2. Create each staff member with new Nurse(...) or new Doctor(...).
 * 3. Put them into an array:
 *    const staff = [maya, raka, lina, budi, sinta]
 * 4. Display role, name, and pay for every person (a for...of loop is allowed).
 *
 * Expected output:
 *  Nurse Maya: 2200000
 *  Nurse Raka: 1800000
 *  Doctor Lina: 2800000
 *  Doctor Budi: 1920000
 *  Nurse Sinta: 2400000
 */

// Write your solution below.

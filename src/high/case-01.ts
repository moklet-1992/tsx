/**
 * High Case 01 — Bike Share (OOP)
 * Points: 160 (High — OOP)
 *
 * A bike-share stand models ONE bike as a class. Create several bike
 * objects, then store them in an array. Do not create a station/manager
 * class, and do not pass an array into a constructor.
 *
 * Bike data:
 * | ID  | Zone | Docked | Hourly Rate |
 * | --- | ---- | ------ | ----------- |
 * | B01 | 1    | Yes    | 8000        |
 * | B02 | 1    | No     | 8000        |
 * | B03 | 2    | Yes    | 10000       |
 * | B04 | 3    | No     | 12000       |
 *
 * Required class Bike (one object):
 *  - Properties: id, zone, isDocked, hourlyRate
 *  - getLabel() → "B01-Z1" style (id + "-Z" + zone)
 *  - rent() → sets isDocked to false
 *  - returnBike() → sets isDocked to true
 *  - getShiftEstimate() → hourlyRate × 6
 *
 * Tasks:
 * 1. Create only the Bike class.
 * 2. Create four Bike objects with new Bike(...).
 * 3. Put them into an array: const bikes = [bike1, bike2, bike3, bike4]
 * 4. Call rent() on B01 and returnBike() on B02.
 * 5. Display every bike using the class methods (a for...of loop is allowed).
 *
 * Expected output:
 *  B01-Z1 | docked false | shift 48000
 *  B02-Z1 | docked true | shift 48000
 *  B03-Z2 | docked true | shift 60000
 *  B04-Z3 | docked false | shift 72000
 */

// Write your solution below.

/**
 * Medium Case 01 — Factory Temperature Watch
 * Points: 140 (Medium)
 *
 * A factory records one machine temperature every hour. An hour is an alert
 * when the temperature is greater than 85. If there are 3 or more alert hours,
 * the shift needs a shutdown check.
 *
 * Hourly temperatures:
 * [78, 82, 88, 91, 80, 86, 79, 84, 90, 77]
 *
 * Required functions:
 *  - isAlert(temperature) → true when temperature > 85
 *  - countAlerts(temperatures) → how many hours are alerts (use a loop)
 *  - findHighest(temperatures) → the highest temperature (use a loop)
 *
 * Shift status:
 *  - Alert hours >= 3 → "Shutdown check required"
 *  - Otherwise        → "Normal operation"
 *
 * Tasks:
 * 1. Create the three functions above.
 * 2. Loop the temperatures. Do not use map, filter, or reduce.
 * 3. Display total hours, alert hours, highest temperature, and shift status.
 *
 * Expected output:
 *  Total hours: 10
 *  Alert hours: 4
 *  Highest temperature: 91
 *  Shutdown check required
 */

const temperatures = [78, 82, 88, 91, 80, 86, 79, 84, 90, 77];

// Write your solution below.

/**
 * Medium Case 01 — River Flood Watch
 * Points: 140 (Medium)
 *
 * A river station records the water level every hour. An hour is an alert
 * when the level is greater than 150. If there are 3 or more alert hours,
 * the town needs evacuate standby.
 *
 * Hourly water levels:
 * [120, 135, 148, 162, 140, 171, 155, 130, 168, 125]
 *
 * Required functions:
 *  - isAlert(level) → true when level > 150
 *  - countAlerts(levels) → how many hours are alerts (use a loop)
 *  - findHighest(levels) → the highest water level (use a loop)
 *
 * Town status:
 *  - Alert hours >= 3 → "Evacuate standby"
 *  - Otherwise        → "Normal watch"
 *
 * Tasks:
 * 1. Create the three functions above.
 * 2. Loop the water levels. Do not use map, filter, or reduce.
 * 3. Display total hours, alert hours, highest level, and town status.
 *
 * Expected output:
 *  Total hours: 10
 *  Alert hours: 4
 *  Highest level: 171
 *  Evacuate standby
 */

const waterLevels = [120, 135, 148, 162, 140, 171, 155, 130, 168, 125];

// Write your solution below.

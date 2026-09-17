/**
 * Medium Case 01 — Server CPU Watch
 * Points: 140 (Medium)
 *
 * A data center records CPU load every hour. An hour is an alert when
 * the load is greater than 80. If there are 3 or more alert hours,
 * the cluster needs to scale out.
 *
 * Hourly CPU loads:
 * [42, 55, 71, 88, 64, 91, 77, 50, 86, 48]
 *
 * Required functions:
 *  - isAlert(load) → true when load > 80
 *  - countAlerts(loads) → how many hours are alerts (use a loop)
 *  - findHighest(loads) → the highest CPU load (use a loop)
 *
 * Cluster status:
 *  - Alert hours >= 3 → "Scale out required"
 *  - Otherwise        → "Stable load"
 *
 * Tasks:
 * 1. Create the three functions above.
 * 2. Loop the CPU loads. Do not use map, filter, or reduce.
 * 3. Display total hours, alert hours, highest load, and cluster status.
 *
 * Expected output:
 *  Total hours: 10
 *  Alert hours: 3
 *  Highest load: 91
 *  Scale out required
 */

const cpuLoads = [42, 55, 71, 88, 64, 91, 77, 50, 86, 48];

// Write your solution below.

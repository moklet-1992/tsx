/**
 * Medium Case 03 — Vaccine Cold-Chain Watch
 * Points: 140 (Medium)
 *
 * A clinic checks vaccine batches against today's day number (1–365).
 * Today is day 15.
 *
 * | Batch Name | Expiry Day |
 * | ---------- | ---------- |
 * | FluA       | 10         |
 * | CovidB     | 17         |
 * | Tetanus    | 14         |
 * | HepB       | 40         |
 * | MMR        | 15         |
 *
 * Days left = expiry day - today.
 *
 * Status (check from top to bottom):
 *  - Days left < 0  → "Expired"
 *  - Days left <= 2 → "Warning"
 *  - Otherwise      → "Safe"
 *
 * If at least one batch is expired, the clinic status is "Cold chain hold".
 * Otherwise the clinic status is "Stock is clear".
 *
 * Required functions:
 *  - daysLeft(expiryDay, today) → expiry day minus today
 *  - getBatchStatus(days) → "Expired", "Warning", or "Safe"
 *  - getClinicStatus(expiredCount) → the clinic status message
 *
 * Tasks:
 * 1. Create the three functions.
 * 2. Loop every batch. Count Expired, Warning, and Safe.
 *    Do not use map, filter, or reduce.
 * 3. Display each batch name with its status, the three counts, and clinic status.
 *
 * Expected output:
 *  FluA: Expired
 *  CovidB: Warning
 *  Tetanus: Expired
 *  HepB: Safe
 *  MMR: Warning
 *  Expired: 2
 *  Warning: 2
 *  Safe: 1
 *  Cold chain hold
 */

const batchNames = ["FluA", "CovidB", "Tetanus", "HepB", "MMR"];
const expiryDays = [10, 17, 14, 40, 15];
const today = 15;

// Write your solution below.

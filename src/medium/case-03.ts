/**
 * Medium Case 03 — Pharmacy Expiry Watch
 * Points: 140 (Medium)
 *
 * A pharmacy checks medicine batches against today's day number (1–365).
 * Today is day 20.
 *
 * | Batch Name    | Expiry Day |
 * | ------------- | ---------- |
 * | Amoxil        | 12         |
 * | Paracetamol   | 22         |
 * | Insulin       | 18         |
 * | Vitamin C     | 45         |
 * | Antibiotic-X  | 20         |
 *
 * Days left = expiry day - today.
 *
 * Status (check from top to bottom):
 *  - Days left < 0  → "Expired"
 *  - Days left <= 3 → "Warning"
 *  - Otherwise      → "Safe"
 *
 * If at least one batch is expired, the shop status is "Quarantine required".
 * Otherwise the shop status is "Stock is clear".
 *
 * Required functions:
 *  - daysLeft(expiryDay, today) → expiry day minus today
 *  - getBatchStatus(days) → "Expired", "Warning", or "Safe"
 *  - getShopStatus(expiredCount) → the shop status message
 *
 * Tasks:
 * 1. Create the three functions.
 * 2. Loop every batch. Count Expired, Warning, and Safe.
 *    Do not use map, filter, or reduce.
 * 3. Display each batch name with its status, the three counts, and shop status.
 *
 * Expected output:
 *  Amoxil: Expired
 *  Paracetamol: Warning
 *  Insulin: Expired
 *  Vitamin C: Safe
 *  Antibiotic-X: Warning
 *  Expired: 2
 *  Warning: 2
 *  Safe: 1
 *  Quarantine required
 */

const batchNames = ["Amoxil", "Paracetamol", "Insulin", "Vitamin C", "Antibiotic-X"];
const expiryDays = [12, 22, 18, 45, 20];
const today = 20;

// Write your solution below.

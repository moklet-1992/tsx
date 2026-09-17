/**
 * Medium Case 03 — Dairy Expiry Watch
 * Points: 140 (Medium)
 *
 * A grocery store checks dairy batches against today's day number (1–365).
 * Today is day 40.
 *
 * | Batch Name | Expiry Day |
 * | ---------- | ---------- |
 * | FreshA     | 35         |
 * | YogurtB    | 42         |
 * | CheeseC    | 39         |
 * | ButterD    | 70         |
 * | MilkE      | 40         |
 *
 * Days left = expiry day - today.
 *
 * Status (check from top to bottom):
 *  - Days left < 0  → "Expired"
 *  - Days left <= 3 → "Warning"
 *  - Otherwise      → "Safe"
 *
 * If at least one batch is expired, the store status is "Recall required".
 * Otherwise the store status is "Stock is clear".
 *
 * Required functions:
 *  - daysLeft(expiryDay, today) → expiry day minus today
 *  - getBatchStatus(days) → "Expired", "Warning", or "Safe"
 *  - getStoreStatus(expiredCount) → the store status message
 *
 * Tasks:
 * 1. Create the three functions.
 * 2. Loop every batch. Count Expired, Warning, and Safe.
 *    Do not use map, filter, or reduce.
 * 3. Display each batch name with its status, the three counts, and store status.
 *
 * Expected output:
 *  FreshA: Expired
 *  YogurtB: Warning
 *  CheeseC: Expired
 *  ButterD: Safe
 *  MilkE: Warning
 *  Expired: 2
 *  Warning: 2
 *  Safe: 1
 *  Recall required
 */

const batchNames = ["FreshA", "YogurtB", "CheeseC", "ButterD", "MilkE"];
const expiryDays = [35, 42, 39, 70, 40];
const today = 40;

// Write your solution below.

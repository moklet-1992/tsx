/**
 * Medium Case 03 — Pantau Kedaluwarsa Susu
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Toko kelontong memeriksa batch susu terhadap nomor hari hari ini (1–365).
 * Hari ini adalah hari ke-40.
 *
 * | Nama Batch | Hari Kedaluwarsa |
 * | ---------- | ---------------- |
 * | FreshA     | 35               |
 * | YogurtB    | 42               |
 * | CheeseC    | 39               |
 * | ButterD    | 70               |
 * | MilkE      | 40               |
 *
 * Sisa hari = hari kedaluwarsa - hari ini.
 *
 * Status (periksa dari atas ke bawah):
 *  - Sisa hari < 0  → "Expired"
 *  - Sisa hari <= 3 → "Warning"
 *  - Selain itu     → "Safe"
 *
 * Jika minimal satu batch kedaluwarsa, status toko "Recall required".
 * Jika tidak, status toko "Stock is clear".
 *
 * Fungsi yang wajib:
 *  - daysLeft(expiryDay, today) → hari kedaluwarsa dikurangi hari ini
 *  - getBatchStatus(days) → "Expired", "Warning", atau "Safe"
 *  - getStoreStatus(expiredCount) → pesan status toko
 *
 * Tugas:
 * 1. Buat ketiga fungsi.
 * 2. Loop setiap batch. Hitung Expired, Warning, dan Safe.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan nama batch beserta status, ketiga jumlah, dan status toko.
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

// Tulis solusi Anda di bawah ini.

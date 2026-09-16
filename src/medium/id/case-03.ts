/**
 * Medium Case 03 — Pantau Rantai Dingin Vaksin
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Klinik memeriksa batch vaksin terhadap nomor hari hari ini (1–365).
 * Hari ini adalah hari ke-15.
 *
 * | Nama Batch | Hari Kedaluwarsa |
 * | ---------- | ---------------- |
 * | FluA       | 10               |
 * | CovidB     | 17               |
 * | Tetanus    | 14               |
 * | HepB       | 40               |
 * | MMR        | 15               |
 *
 * Sisa hari = hari kedaluwarsa - hari ini.
 *
 * Status (periksa dari atas ke bawah):
 *  - Sisa hari < 0  → "Expired"
 *  - Sisa hari <= 2 → "Warning"
 *  - Selain itu     → "Safe"
 *
 * Jika minimal satu batch kedaluwarsa, status klinik "Cold chain hold".
 * Jika tidak, status klinik "Stock is clear".
 *
 * Fungsi yang wajib:
 *  - daysLeft(expiryDay, today) → hari kedaluwarsa dikurangi hari ini
 *  - getBatchStatus(days) → "Expired", "Warning", atau "Safe"
 *  - getClinicStatus(expiredCount) → pesan status klinik
 *
 * Tugas:
 * 1. Buat ketiga fungsi.
 * 2. Loop setiap batch. Hitung Expired, Warning, dan Safe.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan nama batch beserta status, ketiga jumlah, dan status klinik.
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

// Tulis solusi Anda di bawah ini.

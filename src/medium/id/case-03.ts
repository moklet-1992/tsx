/**
 * Medium Case 03 — Pantau Kedaluwarsa Apotek
 * Points: 140 (Medium)
 *
 * Apotek memeriksa batch obat terhadap nomor hari hari ini (1–365).
 * Hari ini adalah hari ke-20.
 *
 * | Nama Batch    | Hari Kedaluwarsa |
 * | ------------- | ---------------- |
 * | Amoxil        | 12               |
 * | Paracetamol   | 22               |
 * | Insulin       | 18               |
 * | Vitamin C     | 45               |
 * | Antibiotic-X  | 20               |
 *
 * Sisa hari = hari kedaluwarsa - hari ini.
 *
 * Status (periksa dari atas ke bawah):
 *  - Sisa hari < 0  → "Expired"
 *  - Sisa hari <= 3 → "Warning"
 *  - Selain itu     → "Safe"
 *
 * Jika minimal satu batch kedaluwarsa, status toko "Quarantine required".
 * Jika tidak, status toko "Stock is clear".
 *
 * Fungsi yang wajib:
 *  - daysLeft(expiryDay, today) → hari kedaluwarsa dikurangi hari ini
 *  - getBatchStatus(days) → "Expired", "Warning", atau "Safe"
 *  - getShopStatus(expiredCount) → pesan status toko
 *
 * Tugas:
 * 1. Buat ketiga fungsi.
 * 2. Loop setiap batch. Hitung Expired, Warning, dan Safe.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan nama batch beserta status, ketiga jumlah, dan status toko.
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

// Tulis kode Anda di bawah ini.

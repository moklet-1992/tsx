/**
 * High Case 02 — Badge Workshop (OOP)
 * Points: 160 (High — OOP)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Badge workshop adalah satu objek. Buat beberapa badge, simpan dalam
 * array, dan ubah state lewat method class. Jangan membuat class gerbang,
 * dan jangan memasukkan array ke constructor.
 *
 * Data badge:
 * | Kode | Track    | Harga  | Sudah Dipakai |
 * | ---- | -------- | ------ | ------------- |
 * | W1   | frontend | 120000 | Tidak         |
 * | W2   | backend  | 150000 | Tidak         |
 * | W3   | frontend | 120000 | Ya            |
 * | W4   | backend  | 150000 | Tidak         |
 *
 * Class wajib Badge (satu objek):
 *  - Properti: code, track, price, isUsed
 *  - getStatus() → "Used" jika isUsed true, selain itu "Valid"
 *  - markUsed() → set isUsed menjadi true
 *  - canEnter() → true hanya jika badge belum dipakai
 *  - getRefund() → 0 jika sudah dipakai, selain itu 30% dari harga
 *
 * Tugas:
 * 1. Buat hanya class Badge.
 * 2. Buat empat objek Badge dengan new Badge(...).
 * 3. Masukkan ke array: const badges = [badgeW1, badgeW2, badgeW3, badgeW4]
 * 4. Panggil markUsed() pada W1.
 * 5. Tampilkan kode, status, canEnter, dan refund untuk setiap badge.
 *
 * Expected output:
 *  W1 | Used | enter false | refund 0
 *  W2 | Valid | enter true | refund 45000
 *  W3 | Used | enter false | refund 0
 *  W4 | Valid | enter true | refund 45000
 */

// Tulis solusi Anda di bawah ini.

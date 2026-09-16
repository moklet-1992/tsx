/**
 * High Case 02 — Kartu Museum (OOP)
 * Points: 160 (High — OOP)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kartu museum adalah satu objek. Buat beberapa kartu, simpan dalam
 * array, dan ubah state lewat method class. Jangan membuat class gerbang,
 * dan jangan memasukkan array ke constructor.
 *
 * Data kartu:
 * | Kode | Kategori | Harga  | Sudah Dipakai |
 * | ---- | -------- | ------ | ------------- |
 * | M1   | regular  | 80000  | Tidak         |
 * | M2   | vip      | 200000 | Tidak         |
 * | M3   | regular  | 80000  | Ya            |
 * | M4   | vip      | 200000 | Tidak         |
 *
 * Class wajib Pass (satu objek):
 *  - Properti: code, category, price, isUsed
 *  - getStatus() → "Used" jika isUsed true, selain itu "Valid"
 *  - markUsed() → set isUsed menjadi true
 *  - canEnter() → true hanya jika kartu belum dipakai
 *  - getRefund() → 0 jika sudah dipakai, selain itu 40% dari harga
 *
 * Tugas:
 * 1. Buat hanya class Pass.
 * 2. Buat empat objek Pass dengan new Pass(...).
 * 3. Masukkan ke array: const passes = [passM1, passM2, passM3, passM4]
 * 4. Panggil markUsed() pada M1.
 * 5. Tampilkan kode, status, canEnter, dan refund untuk setiap kartu.
 *
 * Expected output:
 *  M1 | Used | enter false | refund 0
 *  M2 | Valid | enter true | refund 80000
 *  M3 | Used | enter false | refund 0
 *  M4 | Valid | enter true | refund 80000
 */

// Tulis solusi Anda di bawah ini.

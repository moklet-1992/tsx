/**
 * High Case 01 — Loker Gym (OOP)
 * Points: 160 (High — OOP)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Gym memodelkan SATU loker sebagai class. Buat beberapa objek loker,
 * lalu simpan dalam array. Jangan membuat class board/manager, dan jangan
 * memasukkan array ke constructor.
 *
 * Data loker:
 * | ID  | Lantai | Terpakai | Tarif per Bulan |
 * | --- | ------ | -------- | --------------- |
 * | L01 | 1      | Tidak    | 80000           |
 * | L02 | 1      | Ya       | 80000           |
 * | L03 | 2      | Tidak    | 100000          |
 * | L04 | 3      | Ya       | 120000          |
 *
 * Class wajib Locker (satu objek):
 *  - Properti: id, floor, isTaken, monthlyRate
 *  - getLabel() → gaya "L01-F1" (id + "-F" + floor)
 *  - assign() → set isTaken menjadi true
 *  - vacate() → set isTaken menjadi false
 *  - getYearlyEstimate() → monthlyRate × 12
 *
 * Tugas:
 * 1. Buat hanya class Locker.
 * 2. Buat empat objek Locker dengan new Locker(...).
 * 3. Masukkan ke array: const lockers = [locker1, locker2, locker3, locker4]
 * 4. Panggil assign() pada L03 dan vacate() pada L02.
 * 5. Tampilkan setiap loker memakai method class (loop for...of diperbolehkan).
 *
 * Expected output:
 *  L01-F1 | taken false | yearly 960000
 *  L02-F1 | taken false | yearly 960000
 *  L03-F2 | taken true | yearly 1200000
 *  L04-F3 | taken true | yearly 1440000
 */

// Tulis solusi Anda di bawah ini.

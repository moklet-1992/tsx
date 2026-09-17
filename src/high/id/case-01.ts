/**
 * High Case 01 — Bike Share (OOP)
 * Points: 160 (High — OOP)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Stan bike-share memodelkan SATU sepeda sebagai class. Buat beberapa
 * objek sepeda, lalu simpan dalam array. Jangan membuat class stasiun/manager,
 * dan jangan memasukkan array ke constructor.
 *
 * Data sepeda:
 * | ID  | Zona | Di Dock | Tarif per Jam |
 * | --- | ---- | ------- | ------------- |
 * | B01 | 1    | Ya      | 8000          |
 * | B02 | 1    | Tidak   | 8000          |
 * | B03 | 2    | Ya      | 10000         |
 * | B04 | 3    | Tidak   | 12000         |
 *
 * Class wajib Bike (satu objek):
 *  - Properti: id, zone, isDocked, hourlyRate
 *  - getLabel() → gaya "B01-Z1" (id + "-Z" + zone)
 *  - rent() → set isDocked menjadi false
 *  - returnBike() → set isDocked menjadi true
 *  - getShiftEstimate() → hourlyRate × 6
 *
 * Tugas:
 * 1. Buat hanya class Bike.
 * 2. Buat empat objek Bike dengan new Bike(...).
 * 3. Masukkan ke array: const bikes = [bike1, bike2, bike3, bike4]
 * 4. Panggil rent() pada B01 dan returnBike() pada B02.
 * 5. Tampilkan setiap sepeda memakai method class (loop for...of diperbolehkan).
 *
 * Expected output:
 *  B01-Z1 | docked false | shift 48000
 *  B02-Z1 | docked true | shift 48000
 *  B03-Z2 | docked true | shift 60000
 *  B04-Z3 | docked false | shift 72000
 */

// Tulis solusi Anda di bawah ini.

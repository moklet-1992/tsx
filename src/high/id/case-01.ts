/**
 * High Case 01 — Meja Co-working (OOP)
 * Points: 160 (High — OOP)
 *
 * Ruang co-working memodelkan SATU meja sebagai class. Buat beberapa
 * objek meja, lalu simpan dalam array. Jangan membuat class board/manager,
 * dan jangan memasukkan array ke constructor.
 *
 * Data meja:
 * | ID  | Lantai | Terisi | Tarif per Jam |
 * | --- | ------ | ------ | ------------- |
 * | D01 | 1      | Tidak  | 25000         |
 * | D02 | 1      | Ya     | 25000         |
 * | D03 | 2      | Tidak  | 35000         |
 * | D04 | 3      | Ya     | 45000         |
 *
 * Class wajib Desk (satu objek):
 *  - Properti: id, floor, isOccupied, hourlyRate
 *  - getLabel() → gaya "D01-F1" (id + "-F" + floor)
 *  - occupy() → set isOccupied menjadi true
 *  - release() → set isOccupied menjadi false
 *  - getDailyEstimate() → hourlyRate × 8
 *
 * Tugas:
 * 1. Buat hanya class Desk.
 * 2. Buat empat objek Desk dengan new Desk(...).
 * 3. Masukkan ke array: const desks = [desk1, desk2, desk3, desk4]
 * 4. Panggil occupy() pada D03 dan release() pada D02.
 * 5. Tampilkan setiap meja memakai method class (loop for...of diperbolehkan).
 *
 * Expected output:
 *  D01-F1 | occupied false | daily 200000
 *  D02-F1 | occupied false | daily 200000
 *  D03-F2 | occupied true | daily 280000
 *  D04-F3 | occupied true | daily 360000
 */

// Tulis kode Anda di bawah ini.

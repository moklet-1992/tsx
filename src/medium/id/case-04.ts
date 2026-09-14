/**
 * Medium Case 04 — Naik Bus Malam
 * Points: 140 (Medium)
 *
 * Bus malam punya 12 kursi. true artinya terisi, false artinya kosong.
 * Rombongan 3 penumpang ingin naik.
 *
 * Peta kursi (kursi 1 sampai 12):
 * [true, false, true, true, false, false, true, false, true, false, false, true]
 *
 * Fungsi yang wajib:
 *  - countEmpty(seats) → berapa kursi kosong (pakai loop)
 *  - findFirstEmptySeat(seats) → nomor kursi kosong pertama (mulai dari 1).
 *    Kembalikan 0 jika tidak ada kursi kosong.
 *  - canBoard(emptyCount, passengerCount) → true jika emptyCount >= passengerCount
 *
 * Pesan bus:
 *  - empty === 0              → "Sold out"
 *  - empty > 0 dan empty < 3  → "Almost full"
 *  - empty >= 3               → "Seats available"
 *
 * Tugas:
 * 1. Buat ketiga fungsi.
 * 2. Loop peta kursi. Jangan pakai map, filter, indexOf, atau find.
 * 3. Tampilkan kursi kosong, nomor kursi kosong pertama, apakah rombongan
 *    bisa naik, dan pesan bus.
 *
 * Expected output:
 *  Empty seats: 6
 *  First empty seat: 2
 *  Can board: true
 *  Seats available
 */

const seats = [true, false, true, true, false, false, true, false, true, false, false, true];
const passengerCount = 3;

// Tulis kode Anda di bawah ini.

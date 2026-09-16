/**
 * Medium Case 04 — Naik Feri
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Feri punya 12 slot kendaraan. true artinya terisi, false artinya kosong.
 * Rombongan 4 kendaraan ingin naik.
 *
 * Peta slot (slot 1 sampai 12):
 * [true, true, false, true, false, false, true, false, true, true, false, false]
 *
 * Fungsi yang wajib:
 *  - countEmpty(slots) → berapa slot kosong (pakai loop)
 *  - findFirstEmptySlot(slots) → nomor slot kosong pertama (mulai dari 1).
 *    Kembalikan 0 jika tidak ada slot kosong.
 *  - canBoard(emptyCount, vehicleCount) → true jika emptyCount >= vehicleCount
 *
 * Pesan feri:
 *  - empty === 0              → "Sold out"
 *  - empty > 0 dan empty < 4  → "Almost full"
 *  - empty >= 4               → "Slots available"
 *
 * Tugas:
 * 1. Buat ketiga fungsi.
 * 2. Loop peta slot. Jangan pakai map, filter, indexOf, atau find.
 * 3. Tampilkan slot kosong, nomor slot kosong pertama, apakah rombongan
 *    bisa naik, dan pesan feri.
 *
 * Expected output:
 *  Empty slots: 6
 *  First empty slot: 3
 *  Can board: true
 *  Slots available
 */

const slots = [true, true, false, true, false, false, true, false, true, true, false, false];
const vehicleCount = 4;

// Tulis solusi Anda di bawah ini.

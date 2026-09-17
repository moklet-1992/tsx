/**
 * Medium Case 04 — Parkir Co-working
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Area parkir co-working punya 12 slot. true artinya terisi, false artinya kosong.
 * Rombongan 5 mobil ingin parkir.
 *
 * Peta slot (slot 1 sampai 12):
 * [false, true, true, false, true, false, false, true, true, false, true, false]
 *
 * Fungsi yang wajib:
 *  - countEmpty(spots) → berapa slot kosong (pakai loop)
 *  - findFirstEmptySpot(spots) → nomor slot kosong pertama (mulai dari 1).
 *    Kembalikan 0 jika tidak ada slot kosong.
 *  - canPark(emptyCount, carCount) → true jika emptyCount >= carCount
 *
 * Pesan parkir:
 *  - empty === 0              → "Sold out"
 *  - empty > 0 dan empty < 5  → "Almost full"
 *  - empty >= 5               → "Spots available"
 *
 * Tugas:
 * 1. Buat ketiga fungsi.
 * 2. Loop peta slot. Jangan pakai map, filter, indexOf, atau find.
 * 3. Tampilkan slot kosong, nomor slot kosong pertama, apakah rombongan
 *    bisa parkir, dan pesan parkir.
 *
 * Expected output:
 *  Empty spots: 6
 *  First empty spot: 1
 *  Can park: true
 *  Spots available
 */

const spots = [false, true, true, false, true, false, false, true, true, false, true, false];
const carCount = 5;

// Tulis solusi Anda di bawah ini.

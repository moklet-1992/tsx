/**
 * Medium Case 02 — Shift Dermaga Pelabuhan
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Pelabuhan memungut tarif menurut jenis kapal. Shift ini ada peringatan
 * badai, jadi biaya badai ditambahkan setelah semua kapal dihitung.
 *
 * Jenis kapal shift ini:
 * ["ferry", "cargo", "ferry", "yacht", "speedboat", "cargo", "ferry", "cargo"]
 *
 * Tarif dasar:
 * | Jenis     | Tarif |
 * | --------- | ----- |
 * | speedboat | 4000  |
 * | ferry     | 12000 |
 * | yacht     | 20000 |
 * | cargo     | 25000 |
 * | lainnya   | 0     |
 *
 * Biaya badai = 20% dari total tarif dasar.
 * Setoran akhir = total tarif dasar + biaya badai.
 *
 * Fungsi yang wajib:
 *  - getBaseFee(vesselType) → tarif untuk jenis itu
 *  - getStormSurcharge(totalBaseFee, isStorm) → 20% jika isStorm true, selain itu 0
 *
 * Tugas:
 * 1. Buat kedua fungsi.
 * 2. Loop kapal. Hitung jumlah tiap jenis dan jumlahkan tarif dasar.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Terapkan biaya badai karena ini shift badai.
 * 4. Tampilkan jumlah tiap jenis, total tarif dasar, biaya badai, dan setoran akhir.
 *
 * Expected output:
 *  Speedboat: 1
 *  Ferry: 3
 *  Yacht: 1
 *  Cargo: 3
 *  Total base fee: 135000
 *  Storm surcharge: 27000
 *  Final collection: 162000
 */

const vesselTypes = ["ferry", "cargo", "ferry", "yacht", "speedboat", "cargo", "ferry", "cargo"];
const isStormShift = true;

// Tulis solusi Anda di bawah ini.

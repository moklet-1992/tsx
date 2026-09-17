/**
 * Medium Case 02 — Shift Gerbang Stadion
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Gerbang stadion memungut tarif menurut jenis tiket. Shift ini hujan,
 * jadi biaya hujan ditambahkan setelah semua tiket dihitung.
 *
 * Jenis tiket shift ini:
 * ["regular", "vip", "regular", "student", "regular", "vip", "student", "regular"]
 *
 * Tarif dasar:
 * | Jenis   | Tarif |
 * | ------- | ----- |
 * | student | 15000 |
 * | regular | 25000 |
 * | vip     | 75000 |
 * | lainnya | 0     |
 *
 * Biaya hujan = 10% dari total tarif dasar.
 * Setoran akhir = total tarif dasar + biaya hujan.
 *
 * Fungsi yang wajib:
 *  - getBaseFee(ticketType) → tarif untuk jenis itu
 *  - getRainSurcharge(totalBaseFee, isRain) → 10% jika isRain true, selain itu 0
 *
 * Tugas:
 * 1. Buat kedua fungsi.
 * 2. Loop tiket. Hitung jumlah tiap jenis dan jumlahkan tarif dasar.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Terapkan biaya hujan karena ini shift hujan.
 * 4. Tampilkan jumlah tiap jenis, total tarif dasar, biaya hujan, dan setoran akhir.
 *
 * Expected output:
 *  Student: 2
 *  Regular: 4
 *  VIP: 2
 *  Total base fee: 280000
 *  Rain surcharge: 28000
 *  Final collection: 308000
 */

const ticketTypes = ["regular", "vip", "regular", "student", "regular", "vip", "student", "regular"];
const isRainShift = true;

// Tulis solusi Anda di bawah ini.

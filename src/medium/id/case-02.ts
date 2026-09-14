/**
 * Medium Case 02 — Shift Gerbang Tol
 * Points: 140 (Medium)
 *
 * Gerbang tol memungut tarif menurut jenis kendaraan. Shift ini adalah
 * shift malam, jadi biaya malam ditambahkan setelah semua kendaraan dihitung.
 *
 * Jenis kendaraan shift ini:
 * ["car", "truck", "car", "bus", "motorcycle", "truck", "car", "truck"]
 *
 * Tarif dasar:
 * | Jenis      | Tarif |
 * | ---------- | ----- |
 * | motorcycle | 3000  |
 * | car        | 8000  |
 * | bus        | 15000 |
 * | truck      | 20000 |
 * | lainnya    | 0     |
 *
 * Biaya malam = 25% dari total tarif dasar.
 * Setoran akhir = total tarif dasar + biaya malam.
 *
 * Fungsi yang wajib:
 *  - getBaseFee(vehicleType) → tarif untuk jenis itu
 *  - getNightSurcharge(totalBaseFee, isNight) → 25% jika isNight true, selain itu 0
 *
 * Tugas:
 * 1. Buat kedua fungsi.
 * 2. Loop kendaraan. Hitung jumlah tiap jenis dan jumlahkan tarif dasar.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Terapkan biaya malam karena ini shift malam.
 * 4. Tampilkan jumlah tiap jenis, total tarif dasar, biaya malam, dan setoran akhir.
 *
 * Expected output:
 *  Motorcycle: 1
 *  Car: 3
 *  Bus: 1
 *  Truck: 3
 *  Total base fee: 102000
 *  Night surcharge: 25500
 *  Final collection: 127500
 */

const vehicleTypes = ["car", "truck", "car", "bus", "motorcycle", "truck", "car", "truck"];
const isNightShift = true;

// Tulis kode Anda di bawah ini.

/**
 * Easy Case 04 — Penawaran Antar Makanan
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Layanan antar makanan memeriksa jangkauan dulu, lalu menghitung biaya
 * dari beberapa bagian.
 *
 * Jangkauan:
 *  - Jarak lebih dari 12 km → status "Out of coverage" dan total biaya 0
 *  - Selain itu → status "Accepted" dan hitung biaya di bawah
 *
 * Bagian biaya jika diterima:
 *  - Biaya dasar = 7000
 *  - Biaya jarak = jarak × 2000
 *  - Biaya item = jumlah item × 1000
 *  - Biaya hujan = 3000 jika sedang hujan, selain itu 0
 *  - Biaya jam sibuk = 8000 jika jam sibuk, selain itu 0
 *  - Biaya alat makan = 2000 jika minta alat makan, selain itu 0
 *  - Total biaya = semua bagian dijumlahkan
 *
 * Data pesanan:
 * | Informasi         | Nilai       |
 * | ----------------- | ----------- |
 * | Nama Pelanggan    | Andi Wijaya |
 * | Jarak (km)        | 8           |
 * | Jumlah Item       | 5           |
 * | Sedang Hujan      | Ya          |
 * | Jam Sibuk         | Ya          |
 * | Minta Alat Makan  | Ya          |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tolak pesanan jika di luar jangkauan.
 * 3. Jika diterima, hitung setiap bagian biaya, lalu totalnya.
 * 4. Tampilkan nama pelanggan, setiap bagian biaya, total, dan status.
 *
 * Expected output:
 *  Customer: Andi Wijaya
 *  Base fee: 7000
 *  Distance fee: 16000
 *  Item fee: 5000
 *  Rain fee: 3000
 *  Peak fee: 8000
 *  Cutlery fee: 2000
 *  Total fee: 41000
 *  Status: Accepted
 */

// Tulis solusi Anda di bawah ini.

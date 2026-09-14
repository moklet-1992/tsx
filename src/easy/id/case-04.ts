/**
 * Easy Case 04 — Kurir Same-Day
 * Points: 100 (Easy)
 *
 * Layanan kurir Moklet Express memeriksa jangkauan dulu, lalu menghitung biaya dari
 * beberapa poin.
 *
 * Jangkauan:
 *  - Jarak lebih dari 25 km → status "Out of coverage" dan total biaya 0
 *  - Selain itu → status "Accepted" dan hitung biaya di bawah
 *
 * Bagian biaya jika diterima:
 *  - Biaya dasar = 8000
 *  - Biaya jarak = jarak × 2500
 *  - Biaya berat = berat × 1500
 *  - Biaya COD = 5000 jika bayar di tempat, selain itu 0
 *  - Biaya hujan = 4000 jika sedang hujan, selain itu 0
 *  - Biaya same-day = 10000 jika pengiriman hari ini, selain itu 0
 *  - Total biaya = semua bagian dijumlahkan
 *
 * Data pengiriman:
 * | Informasi           | Nilai           |
 * | ------------------- | --------------- |
 * | Nama Pengirim       | Luhut Panjaitan |
 * | Jarak (km)          | 18              |
 * | Berat (kg)          | 4               |
 * | Bayar di Tempat     | Ya              |
 * | Sedang Hujan        | Ya              |
 * | Same-Day            | Ya              |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tolak pengiriman jika di luar jangkauan.
 * 3. Jika diterima, hitung setiap bagian biaya, lalu totalnya.
 * 4. Tampilkan nama pengirim, setiap bagian biaya, total, dan status.
 *
 * Expected output:
 *  Sender: Luhut Panjaitan
 *  Base fee: 8000
 *  Distance fee: 45000
 *  Weight fee: 6000
 *  COD fee: 5000
 *  Rain fee: 4000
 *  Same-day fee: 10000
 *  Total fee: 78000
 *  Status: Accepted
 */

// Tulis solusi Anda di bawah ini.

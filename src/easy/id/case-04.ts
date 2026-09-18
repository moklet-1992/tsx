/**
 * Easy Case 04 — Penawaran Antar Laundry
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Layanan laundry memeriksa kapasitas berat dulu, lalu menghitung biaya
 * dari beberapa bagian.
 *
 * Kapasitas:
 *  - Berat lebih dari 15 kg → status "Out of service" dan total biaya 0
 *  - Selain itu → status "Accepted" dan hitung biaya di bawah
 *
 * Bagian biaya jika diterima:
 *  - Biaya dasar = 8000
 *  - Biaya berat = berat × 6000
 *  - Biaya kilat = 12000 jika minta kilat, selain itu 0
 *  - Biaya setrika = 7000 jika minta setrika, selain itu 0
 *  - Biaya pewangi = 3000 jika minta pewangi, selain itu 0
 *  - Biaya weekend = 5000 jika jemput di akhir pekan, selain itu 0
 *  - Total biaya = semua bagian dijumlahkan
 *
 * Data pesanan:
 * | Informasi       | Nilai         |
 * | --------------- | ------------- |
 * | Nama Pelanggan  | Dina Maharani |
 * | Berat (kg)      | 8             |
 * | Kilat           | Ya            |
 * | Setrika         | Ya            |
 * | Pewangi         | Tidak         |
 * | Akhir Pekan     | Ya            |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tolak pesanan jika di luar layanan.
 * 3. Jika diterima, hitung setiap bagian biaya, lalu totalnya.
 * 4. Tampilkan nama pelanggan, setiap bagian biaya, total, dan status.
 *
 * Expected output:
 *  Customer: Dina Maharani
 *  Base fee: 8000
 *  Weight fee: 48000
 *  Express fee: 12000
 *  Ironing fee: 7000
 *  Fragrance fee: 0
 *  Weekend fee: 5000
 *  Total fee: 80000
 *  Status: Accepted
 */

// Tulis solusi Anda di bawah ini.

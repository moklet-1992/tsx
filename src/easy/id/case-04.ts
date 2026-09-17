/**
 * Easy Case 04 — Penawaran Katering Acara
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Dapur katering memeriksa kapasitas dulu, lalu menghitung biaya dari
 * beberapa bagian.
 *
 * Kapasitas:
 *  - Jumlah tamu lebih dari 80 → status "Out of capacity" dan total biaya 0
 *  - Selain itu → status "Accepted" dan hitung biaya di bawah
 *
 * Bagian biaya jika diterima:
 *  - Biaya dasar = 50000
 *  - Biaya tamu = jumlah tamu × 35000
 *  - Biaya dessert = 15000 jika ada dessert, selain itu 0
 *  - Biaya vegetarian = 20000 jika menu vegetarian, selain itu 0
 *  - Biaya weekend = 40000 jika acara di akhir pekan, selain itu 0
 *  - Biaya antar = 25000 jika minta diantar, selain itu 0
 *  - Total biaya = semua bagian dijumlahkan
 *
 * Data acara:
 * | Informasi         | Nilai          |
 * | ----------------- | -------------- |
 * | Nama Klien        | Lila Anggraini |
 * | Jumlah Tamu       | 24             |
 * | Ada Dessert       | Ya             |
 * | Menu Vegetarian   | Ya             |
 * | Akhir Pekan       | Ya             |
 * | Minta Diantar     | Tidak          |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tolak acara jika di luar kapasitas.
 * 3. Jika diterima, hitung setiap bagian biaya, lalu totalnya.
 * 4. Tampilkan nama klien, setiap bagian biaya, total, dan status.
 *
 * Expected output:
 *  Client: Lila Anggraini
 *  Base fee: 50000
 *  Guest fee: 840000
 *  Dessert fee: 15000
 *  Vegetarian fee: 20000
 *  Weekend fee: 40000
 *  Delivery fee: 0
 *  Total fee: 965000
 *  Status: Accepted
 */

// Tulis solusi Anda di bawah ini.

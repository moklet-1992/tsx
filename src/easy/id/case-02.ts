/**
 * Easy Case 02 — Kuota Cetak Perpustakaan
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Printer perpustakaan harus memeriksa pekerjaan dalam urutan ini dan
 * berhenti pada aturan pertama yang gagal:
 *  1. Jumlah halaman harus lebih dari 0
 *  2. Halaman yang sudah dicetak hari ini + pekerjaan ini tidak boleh
 *     melebihi batas harian
 *  3. Biaya cetak + biaya warna tidak boleh melebihi sisa kuota
 *
 * Biaya warna:
 *  - Cetak berwarna → Rp2.000
 *  - Hitam putih → Rp0
 *
 * Biaya cetak = halaman × 200
 *
 * Jika diterima:
 *  - Sisa kuota = kuota saat ini - biaya cetak - biaya warna
 *  - Status = "Success"
 *
 * Jika ditolak:
 *  - Sisa kuota tetap sama
 *  - Status salah satu dari: "Invalid pages", "Daily page limit exceeded",
 *    atau "Insufficient quota"
 *
 * Data pekerjaan:
 * | Informasi              | Nilai      |
 * | ---------------------- | ---------- |
 * | Nama Mahasiswa         | Bima Sakti |
 * | Sisa Kuota             | 25000      |
 * | Halaman                | 40         |
 * | Halaman Dicetak Hari Ini | 30       |
 * | Batas Halaman Harian   | 80         |
 * | Cetak Berwarna         | Ya         |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tentukan biaya warna dengan if...else.
 * 3. Validasi pekerjaan sesuai urutan memakai if...else if...else.
 * 4. Tampilkan nama mahasiswa, biaya warna, sisa kuota, dan status.
 *
 * Expected output:
 *  Student: Bima Sakti
 *  Color fee: 2000
 *  Remaining quota: 15000
 *  Status: Success
 */

// Tulis solusi Anda di bawah ini.

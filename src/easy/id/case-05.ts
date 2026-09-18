/**
 * Easy Case 05 — Klaim Kerusakan Sewa Kamera
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Toko sewa menyetujui klaim kamera hanya jika SEMUA aturan berikut benar:
 *  - Hari sewa minimal 1
 *  - Nilai klaim lebih besar dari biaya penanganan
 *  - Jika kamera dicuri, harus ada laporan polisi
 *    (klaim kamera rusak tidak wajib laporan polisi)
 *
 * Jika disetujui:
 *  - Pembayaran = nilai klaim - biaya penanganan
 *  - Status = "Approved"
 *
 * Jika ditolak:
 *  - Pembayaran = 0
 *  - Status = "Rejected"
 *
 * Data klaim:
 * | Informasi          | Nilai         |
 * | ------------------ | ------------- |
 * | Nama Penyewa       | Reza Mahendra |
 * | Hari Sewa          | 3             |
 * | Nilai Klaim        | 2800000       |
 * | Biaya Penanganan   | 400000        |
 * | Dicuri             | Ya            |
 * | Ada Laporan Polisi | Ya            |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tulis aturan pencurian agar wajib hanya jika kamera dicuri.
 *    Petunjuk: !isStolen || hasPoliceReport
 * 3. Gabungkan semua aturan persetujuan dengan operator logika.
 * 4. Hitung pembayaran dan tampilkan nama penyewa, pembayaran, dan status.
 *
 * Expected output:
 *  Renter: Reza Mahendra
 *  Payout: 2400000
 *  Status: Approved
 */

// Tulis solusi Anda di bawah ini.

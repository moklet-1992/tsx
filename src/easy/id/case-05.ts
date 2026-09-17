/**
 * Easy Case 05 — Klaim Asuransi Laptop
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Asuransi menyetujui klaim laptop hanya jika SEMUA aturan berikut benar:
 *  - Polis sudah aktif minimal 2 bulan
 *  - Nilai klaim lebih besar dari biaya excess
 *  - Jika laptop hilang, harus ada laporan polisi
 *    (klaim perangkat rusak tidak wajib laporan polisi)
 *
 * Jika disetujui:
 *  - Pembayaran = nilai klaim - biaya excess
 *  - Status = "Approved"
 *
 * Jika ditolak:
 *  - Pembayaran = 0
 *  - Status = "Rejected"
 *
 * Data klaim:
 * | Informasi         | Nilai        |
 * | ----------------- | ------------ |
 * | Nama Pemilik      | Yoga Pratama |
 * | Bulan Polis       | 6            |
 * | Nilai Klaim       | 4500000      |
 * | Biaya Excess      | 500000       |
 * | Hilang            | Ya           |
 * | Ada Laporan Polisi| Ya           |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tulis aturan barang hilang agar wajib hanya jika laptop hilang.
 *    Petunjuk: !isLost || hasPoliceReport
 * 3. Gabungkan semua aturan persetujuan dengan operator logika.
 * 4. Hitung pembayaran dan tampilkan nama pemilik, pembayaran, dan status.
 *
 * Expected output:
 *  Owner: Yoga Pratama
 *  Payout: 4000000
 *  Status: Approved
 */

// Tulis solusi Anda di bawah ini.

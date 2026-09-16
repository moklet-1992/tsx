/**
 * Easy Case 05 — Klaim Garansi Ponsel
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Service center menyetujui klaim garansi hanya jika SEMUA aturan berikut benar:
 *  - Usia perangkat maksimal 12 bulan
 *  - Nilai klaim lebih besar dari biaya servis
 *  - Jika klaim adalah kerusakan air, harus ada bukti waterproof
 *    (klaim non-air tidak wajib bukti waterproof)
 *
 * Jika disetujui:
 *  - Pembayaran = nilai klaim - biaya servis
 *  - Status = "Approved"
 *
 * Jika ditolak:
 *  - Pembayaran = 0
 *  - Status = "Rejected"
 *
 * Data klaim:
 * | Informasi            | Nilai        |
 * | -------------------- | ------------ |
 * | Nama Pelanggan       | Maya Kartika |
 * | Usia Perangkat (bln) | 8            |
 * | Nilai Klaim          | 1500000      |
 * | Biaya Servis         | 250000       |
 * | Kerusakan Air        | Ya           |
 * | Ada Bukti Waterproof | Ya           |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tulis aturan kerusakan air agar wajib hanya jika klaim adalah air.
 *    Petunjuk: !isWaterDamage || hasWaterproofProof
 * 3. Gabungkan semua aturan persetujuan dengan operator logika.
 * 4. Hitung pembayaran dan tampilkan nama pelanggan, pembayaran, dan status.
 *
 * Expected output:
 *  Customer: Maya Kartika
 *  Payout: 1250000
 *  Status: Approved
 */

// Tulis solusi Anda di bawah ini.

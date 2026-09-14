/**
 * Easy Case 05 — Klaim Asuransi Perjalanan
 * Points: 100 (Easy)
 *
 * Kantor asuransi Moklet Insurance menyetujui klaim hanya jika SEMUA aturan berikut benar:
 *  - Polis sudah aktif minimal 3 bulan
 *  - Nilai klaim lebih besar dari biaya dana pengaman
 *  - Jika klaim adalah kasus pencurian, harus ada laporan polisi
 *    (klaim non-pencurian tidak wajib laporan polisi)
 *
 * Jika disetujui:
 *  - Pembayaran = nilai klaim - biaya dana pengaman
 *  - Status = "Approved"
 *
 * Jika ditolak:
 *  - Pembayaran = 0
 *  - Status = "Rejected"
 *
 * Data klaim:
 * | Informasi            | Nilai            |
 * | -------------------- | ---------------- |
 * | Nama Pemohon         | Prabowo Subianto |
 * | Bulan Polis Aktif    | 5                |
 * | Nilai Klaim          | 2000000          |
 * | Deductible           | 500000           |
 * | Kasus Pencurian      | Ya               |
 * | Ada Laporan Polisi   | Ya               |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tulis aturan pencurian agar wajib hanya jika klaim adalah pencurian.
 *    Petunjuk: !isTheft || hasPoliceReport
 * 3. Gabungkan semua aturan persetujuan dengan operator logika.
 * 4. Hitung pembayaran dan tampilkan nama pemohon, pembayaran, dan status.
 *
 * Expected output:
 *  Claimant: Prabowo Subianto
 *  Payout: 1500000
 *  Status: Approved
 */

// Tulis kode Anda di bawah ini.

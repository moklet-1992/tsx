/**
 * Easy Case 02 — Kartu Tamu Gerbang Kampus
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Gerbang kampus harus memeriksa pengunjung dalam urutan ini dan berhenti
 * pada aturan pertama yang gagal:
 *  1. Jam kunjungan harus lebih dari 0
 *  2. Jam yang sudah dipakai hari ini + kunjungan ini tidak boleh melebihi
 *     batas jam harian
 *  3. Biaya kunjungan + biaya kendaraan tidak boleh melebihi kredit prabayar
 *
 * Biaya kendaraan:
 *  - Bawa mobil → Rp5.000
 *  - Tidak bawa mobil → Rp0
 *
 * Biaya kunjungan = jam kunjungan × tarif per jam
 *
 * Jika kunjungan diterima:
 *  - Sisa kredit = kredit prabayar - biaya kunjungan - biaya kendaraan
 *  - Status = "Success"
 *
 * Jika kunjungan ditolak:
 *  - Sisa kredit tetap sama dengan kredit prabayar
 *  - Status salah satu dari: "Invalid hours", "Daily hours exceeded",
 *    atau "Insufficient credit"
 *
 * Data pengunjung:
 * | Informasi            | Nilai        |
 * | -------------------- | ------------ |
 * | Nama Pengunjung      | Doni Pratama |
 * | Kredit Prabayar      | 80000        |
 * | Jam Kunjungan        | 4            |
 * | Jam Terpakai Hari Ini| 3            |
 * | Batas Jam Harian     | 8            |
 * | Tarif per Jam        | 10000        |
 * | Bawa Mobil           | Ya           |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tentukan biaya kendaraan dengan if...else.
 * 3. Validasi kunjungan sesuai urutan memakai if...else if...else.
 * 4. Tampilkan nama pengunjung, biaya kendaraan, sisa kredit, dan status.
 *
 * Expected output:
 *  Visitor: Doni Pratama
 *  Vehicle fee: 5000
 *  Remaining credit: 35000
 *  Status: Success
 */

// Tulis solusi Anda di bawah ini.

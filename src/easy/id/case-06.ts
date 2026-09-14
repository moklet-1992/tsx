/**
 * Easy Case 06 — Pra-Cek Kredit Motor
 * Points: 100 (Easy)
 *
 * Perusahaan pembiayaan Moklet Finance melakukan skrining pertama sebelum tinjauan kredit
 * penuh. Pengajuan disetujui awal hanya jika SEMUA aturan berikut benar:
 *  - Usia 21 sampai 55 (inklusif)
 *  - Pengalaman kerja minimal 12 bulan
 *  - Pinjaman yang diminta tidak lebih besar dari pinjaman maksimum
 *  - Rasio utang tidak lebih besar dari 0.4
 *
 * Rumus:
 *  - Pinjaman maksimum = penghasilan bulanan × 4
 *  - Cicilan baru = pinjaman yang diminta × 0.04
 *  - Rasio utang = (cicilan existing + cicilan baru) / penghasilan bulanan
 *
 * Data pemohon:
 * | Informasi            | Nilai        |
 * | -------------------- | ------------ |
 * | Nama Pemohon         | Gibran Rakka |
 * | Usia                 | 24           |
 * | Bulan Kerja          | 18           |
 * | Penghasilan Bulanan  | 6000000      |
 * | Cicilan Existing     | 800000       |
 * | Pinjaman Diminta     | 20000000     |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Hitung pinjaman maksimum, cicilan baru, dan rasio utang.
 * 3. Gabungkan semua aturan skrining dengan operator logika.
 * 4. Tampilkan nama pemohon, pinjaman maksimum, cicilan baru, rasio utang,
 *    dan salah satu pesan berikut:
 *    - "Pre-approved"
 *    - "Rejected"
 *
 * Expected output:
 *  Applicant: Gibran Rakka
 *  Maximum loan: 24000000
 *  New installment: 800000
 *  Debt ratio: 0.2666... (atau 0.27)
 *  Pre-approved
 */

// Tulis solusi Anda di bawah ini.

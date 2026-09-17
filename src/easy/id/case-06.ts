/**
 * Easy Case 06 — Pra-Cek Pinjaman Usaha Sampingan
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kantor pembiayaan mikro melakukan skrining pertama. Pengajuan disetujui
 * awal hanya jika SEMUA aturan berikut benar:
 *  - Usia 20 sampai 45 (inklusif)
 *  - Usia usaha minimal 8 bulan
 *  - Pinjaman yang diminta tidak lebih besar dari pinjaman maksimum
 *  - Rasio cicilan tidak lebih besar dari 0.25
 *
 * Rumus:
 *  - Pinjaman maksimum = omzet bulanan × 3
 *  - Cicilan baru = pinjaman yang diminta × 0.05
 *  - Rasio cicilan = (cicilan existing + cicilan baru) / omzet bulanan
 *
 * Data pemohon:
 * | Informasi            | Nilai      |
 * | -------------------- | ---------- |
 * | Nama Pemohon         | Wulan Sari |
 * | Usia                 | 29         |
 * | Bulan Usaha          | 11         |
 * | Omzet Bulanan        | 10000000   |
 * | Cicilan Existing     | 1200000    |
 * | Pinjaman Diminta     | 18000000   |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Hitung pinjaman maksimum, cicilan baru, dan rasio cicilan.
 * 3. Gabungkan semua aturan skrining dengan operator logika.
 * 4. Tampilkan nama pemohon, pinjaman maksimum, cicilan baru, rasio cicilan,
 *    dan salah satu pesan berikut:
 *    - "Pre-approved"
 *    - "Rejected"
 *
 * Expected output:
 *  Applicant: Wulan Sari
 *  Maximum loan: 30000000
 *  New installment: 900000
 *  Installment ratio: 0.21
 *  Pre-approved
 */

// Tulis solusi Anda di bawah ini.

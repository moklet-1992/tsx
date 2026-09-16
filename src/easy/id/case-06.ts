/**
 * Easy Case 06 — Pra-Cek Sewa Apartemen
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kantor sewa melakukan skrining pertama. Pengajuan disetujui awal hanya
 * jika SEMUA aturan berikut benar:
 *  - Usia 21 sampai 50 (inklusif)
 *  - Pengalaman kerja minimal 6 bulan
 *  - Sewa yang diminta tidak lebih besar dari sewa maksimum
 *  - Rasio sewa tidak lebih besar dari 0.3
 *
 * Rumus:
 *  - Sewa maksimum = penghasilan bulanan × 0.3
 *  - Deposit = sewa yang diminta × 2
 *  - Rasio sewa = sewa yang diminta / penghasilan bulanan
 *
 * Data pemohon:
 * | Informasi           | Nilai         |
 * | ------------------- | ------------- |
 * | Nama Pemohon        | Fajar Hidayat |
 * | Usia                | 26            |
 * | Bulan Kerja         | 14            |
 * | Penghasilan Bulanan | 8000000       |
 * | Sewa yang Diminta   | 2200000       |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Hitung sewa maksimum, deposit, dan rasio sewa.
 * 3. Gabungkan semua aturan skrining dengan operator logika.
 * 4. Tampilkan nama pemohon, sewa maksimum, deposit, rasio sewa,
 *    dan salah satu pesan berikut:
 *    - "Pre-approved"
 *    - "Rejected"
 *
 * Expected output:
 *  Applicant: Fajar Hidayat
 *  Maximum rent: 2400000
 *  Deposit: 4400000
 *  Rent ratio: 0.275
 *  Pre-approved
 */

// Tulis solusi Anda di bawah ini.

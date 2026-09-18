/**
 * Easy Case 06 — Pra-Cek Beasiswa Stipend
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kantor beasiswa melakukan skrining pertama. Pengajuan disetujui awal
 * hanya jika SEMUA aturan berikut benar:
 *  - Usia 17 sampai 23 (inklusif)
 *  - Semester saat ini minimal 2
 *  - Stipend yang diminta tidak lebih besar dari stipend maksimum
 *  - Rasio pengeluaran tidak lebih besar dari 0.2
 *
 * Rumus:
 *  - Stipend maksimum = penghasilan keluarga × 0.15
 *  - Biaya hidup = stipend yang diminta × 0.6
 *  - Rasio pengeluaran = stipend yang diminta / penghasilan keluarga
 *
 * Data pemohon:
 * | Informasi            | Nilai         |
 * | -------------------- | ------------- |
 * | Nama Pemohon         | Intan Permata |
 * | Usia                 | 19            |
 * | Semester             | 3             |
 * | Penghasilan Keluarga | 5000000       |
 * | Stipend Diminta      | 700000        |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Hitung stipend maksimum, biaya hidup, dan rasio pengeluaran.
 * 3. Gabungkan semua aturan skrining dengan operator logika.
 * 4. Tampilkan nama pemohon, stipend maksimum, biaya hidup, rasio pengeluaran,
 *    dan salah satu pesan berikut:
 *    - "Pre-approved"
 *    - "Rejected"
 *
 * Expected output:
 *  Applicant: Intan Permata
 *  Maximum stipend: 750000
 *  Living cost: 420000
 *  Expense ratio: 0.14
 *  Pre-approved
 */

// Tulis solusi Anda di bawah ini.

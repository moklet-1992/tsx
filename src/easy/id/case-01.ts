/**
 * Easy Case 01 — Kelayakan Donor Darah
 * Points: 100 (Easy)
 *
 * PMI Kota Malang menerima donor hanya jika SEMUA aturan berikut terpenuhi:
 *  - Usia 17 sampai 60 (inklusif)
 *  - Berat badan minimal 50 kg
 *  - Hemoglobin minimal 12.5
 *  - Terakhir donor minimal 84 hari yang lalu
 *  - Pendonor merasa sehat hari ini
 *
 * Jika layak, pilih jenis donor:
 *  - Hemoglobin 14.0 atau lebih → "Double Red Cell"
 *  - Selain itu → "Whole Blood"
 *
 * Jika tidak layak:
 *  - Jenis donor adalah "None"
 *
 * Data pendonor:
 * | Informasi                 | Nilai        |
 * | ------------------------- | ------------ |
 * | Nama Pendonor             | Joko Widodo  |
 * | Usia                      | 22           |
 * | Berat (kg)                | 54           |
 * | Hemoglobin                | 13.2         |
 * | Hari Sejak Donor Terakhir | 90           |
 * | Merasa Sehat              | Ya           |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Gabungkan semua aturan kelayakan dengan operator logika.
 * 3. Jika layak, tentukan jenis donor dengan if...else bersarang.
 * 4. Tampilkan nama pendonor, kelayakan (true/false), jenis donor, dan
 *    salah satu pesan berikut:
 *    - "Eligible to donate"
 *    - "Not eligible to donate"
 *
 * Expected output:
 *  Donor: Joko Widodo
 *  Eligible: true
 *  Donation type: Whole Blood
 *  Eligible to donate
 */

// Tulis kode Anda di bawah ini.

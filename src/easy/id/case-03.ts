/**
 * Easy Case 03 — Triase Klinik
 * Points: 100 (Easy)
 *
 * Klinik Kota Malang menentukan prioritas dan biaya konsultasi dari gejala yang dialami
 * pasien. Periksa aturan dari atas ke bawah dan pakai kecocokan pertama.
 *
 * | Kondisi                                                    | Prioritas | Biaya  |
 * | ---------------------------------------------------------- | --------- | ------ |
 * | Oksigen di bawah 90, ATAU pasien nyeri dada                | Emergency | 150000 |
 * | Suhu 38.5 atau lebih, ATAU oksigen di bawah 95             | Urgent    | 100000 |
 * | Kasus lain                                                 | Normal    | 50000  |
 *
 * Data pasien:
 * | Informasi       | Nilai         |
 * | --------------- | ------------- |
 * | Nama Pasien     | Puan Maharani |
 * | Suhu (°C)       | 38.7          |
 * | Oksigen (%)     | 94            |
 * | Nyeri Dada      | Tidak         |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tentukan prioritas dengan if...else if...else dan operator logika.
 * 3. Setel biaya konsultasi sesuai prioritas yang cocok.
 * 4. Tampilkan nama pasien, prioritas, biaya, dan alasan singkat:
 *    - Emergency → "Critical signs detected"
 *    - Urgent    → "Needs prompt examination"
 *    - Normal    → "Stable condition"
 *
 * Expected output:
 *  Patient: Puan Maharani
 *  Priority: Urgent
 *  Fee: 100000
 *  Needs prompt examination
 */

// Tulis kode Anda di bawah ini.

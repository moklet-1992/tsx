/**
 * Easy Case 03 — Prioritas Helpdesk
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Helpdesk menentukan prioritas dan biaya on-site dari tiket.
 * Periksa aturan dari atas ke bawah dan pakai kecocokan pertama.
 *
 * | Kondisi                                                         | Prioritas | Biaya  |
 * | --------------------------------------------------------------- | --------- | ------ |
 * | Sistem down, ATAU ada kebocoran keamanan                        | Critical  | 200000 |
 * | Respons yang diminta di bawah 4 jam, ATAU klien VIP             | High      | 120000 |
 * | Kasus lain                                                      | Normal    | 60000  |
 *
 * Data tiket:
 * | Informasi                 | Nilai     |
 * | ------------------------- | --------- |
 * | Nama Klien                | Sari Dewi |
 * | Sistem Down               | Tidak     |
 * | Kebocoran Keamanan        | Tidak     |
 * | Jam Respons yang Diminta  | 3         |
 * | Klien VIP                 | Tidak     |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tentukan prioritas dengan if...else if...else dan operator logika.
 * 3. Setel biaya on-site sesuai prioritas yang cocok.
 * 4. Tampilkan nama klien, prioritas, biaya, dan alasan singkat:
 *    - Critical → "Immediate action required"
 *    - High     → "Needs fast handling"
 *    - Normal   → "Queued for regular support"
 *
 * Expected output:
 *  Client: Sari Dewi
 *  Priority: High
 *  Fee: 120000
 *  Needs fast handling
 */

// Tulis solusi Anda di bawah ini.

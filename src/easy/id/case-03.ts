/**
 * Easy Case 03 — Panggilan Pos Pemadam
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Pos pemadam menentukan kode dan biaya dispatch dari sebuah panggilan.
 * Periksa aturan dari atas ke bawah dan pakai kecocokan pertama.
 *
 * | Kondisi                                               | Kode        | Biaya  |
 * | ----------------------------------------------------- | ----------- | ------ |
 * | Ada kebakaran gedung, ATAU ada kebocoran gas          | Code Red    | 300000 |
 * | Jumlah cedera minimal 1, ATAU ada orang terperangkap  | Code Yellow | 180000 |
 * | Kasus lain                                            | Code Green  | 70000  |
 *
 * Data panggilan:
 * | Informasi         | Nilai         |
 * | ----------------- | ------------- |
 * | Nama Pemanggil    | Haris Nugroho |
 * | Kebakaran Gedung  | Tidak         |
 * | Kebocoran Gas     | Tidak         |
 * | Jumlah Cedera     | 0             |
 * | Orang Terperangkap| Ya            |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tentukan kode dengan if...else if...else dan operator logika.
 * 3. Setel biaya dispatch sesuai kode yang cocok.
 * 4. Tampilkan nama pemanggil, kode, biaya, dan alasan singkat:
 *    - Code Red    → "Send full crew"
 *    - Code Yellow → "Send rescue team"
 *    - Code Green  → "Stand by at station"
 *
 * Expected output:
 *  Caller: Haris Nugroho
 *  Code: Code Yellow
 *  Fee: 180000
 *  Send rescue team
 */

// Tulis solusi Anda di bawah ini.

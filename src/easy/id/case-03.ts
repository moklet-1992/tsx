/**
 * Easy Case 03 — Prioritas Insiden Gudang
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Gudang menentukan prioritas dan biaya tanggap dari sebuah insiden.
 * Periksa aturan dari atas ke bawah dan pakai kecocokan pertama.
 *
 * | Kondisi                                                    | Prioritas | Biaya  |
 * | ---------------------------------------------------------- | --------- | ------ |
 * | Alarm kebakaran menyala, ATAU ada kebocoran bahan kimia    | Hazard    | 250000 |
 * | Jumlah cedera minimal 1, ATAU mesin berhenti               | Urgent    | 150000 |
 * | Kasus lain                                                 | Routine   | 50000  |
 *
 * Data insiden:
 * | Informasi      | Nilai       |
 * | -------------- | ----------- |
 * | Nama Pelapor   | Eko Santoso |
 * | Alarm Kebakaran| Tidak       |
 * | Kebocoran Kimia| Tidak       |
 * | Jumlah Cedera  | 1           |
 * | Mesin Berhenti | Tidak       |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tentukan prioritas dengan if...else if...else dan operator logika.
 * 3. Setel biaya tanggap sesuai prioritas yang cocok.
 * 4. Tampilkan nama pelapor, prioritas, biaya, dan alasan singkat:
 *    - Hazard  → "Clear the area now"
 *    - Urgent  → "Dispatch supervisor"
 *    - Routine → "Log for morning review"
 *
 * Expected output:
 *  Reporter: Eko Santoso
 *  Priority: Urgent
 *  Fee: 150000
 *  Dispatch supervisor
 */

// Tulis solusi Anda di bawah ini.

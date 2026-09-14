/**
 * Easy Case 02 — Penarikan Tunai pada ATM
 * Points: 100 (Easy)
 *
 * ATM harus memeriksa transaksi dalam urutan ini dan berhenti pada
 * aturan pertama yang gagal:
 *  1. Nominal penarikan harus lebih dari 0
 *  2. Kumulatif penarikan hari ini pada transaksi sebelumnya + penarikan ini tidak boleh melebihi
 *     batas harian
 *  3. Penarikan + biaya admin tidak boleh melebihi saldo rekening
 *
 * Biaya admin:
 *  - ATM bank lain → Rp7.500
 *  - ATM bank sendiri → Rp0
 *
 * Jika transaksi diterima:
 *  - Saldo baru = saldo saat ini - penarikan - biaya admin
 *  - Status = "Success"
 *
 * Jika transaksi ditolak:
 *  - Saldo baru tetap sama dengan saldo saat ini
 *  - Status salah satu dari: "Invalid amount", "Daily limit exceeded",
 *    atau "Insufficient balance"
 *
 * Data rekening:
 * | Informasi                 | Nilai        |
 * | ------------------------- | ------------ |
 * | Pemilik Rekening          | Bahlil Ulala |
 * | Saldo Saat Ini            | 1250000      |
 * | Nominal Penarikan         | 500000       |
 * | Sudah Ditarik Hari Ini    | 300000       |
 * | Batas Harian              | 1000000      |
 * | ATM Bank Lain             | Ya           |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tentukan biaya admin dengan if...else.
 * 3. Validasi transaksi sesuai urutan memakai if...else if...else.
 * 4. Tampilkan pemilik rekening, biaya admin, saldo baru, dan status.
 *
 * Expected output:
 *  Account holder: Bahlil Ulala
 *  Admin fee: 7500
 *  New balance: 742500
 *  Status: Success
 */

// Tulis kode Anda di bawah ini.

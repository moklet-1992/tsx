/**
 * Easy Case 02 — Kartu Makan Kantin
 * Points: 100 (Easy)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kasir kantin harus memeriksa pembelian dalam urutan ini dan berhenti
 * pada aturan pertama yang gagal:
 *  1. Jumlah paket makan harus lebih dari 0
 *  2. Paket yang sudah dibeli hari ini + pesanan ini tidak boleh melebihi
 *     batas harian
 *  3. Biaya makan + biaya minuman tidak boleh melebihi saldo kartu
 *
 * Biaya minuman:
 *  - Ada minuman → Rp4.000
 *  - Tanpa minuman → Rp0
 *
 * Biaya makan = jumlah paket × 12000
 *
 * Jika pembelian diterima:
 *  - Saldo baru = saldo kartu - biaya makan - biaya minuman
 *  - Status = "Success"
 *
 * Jika pembelian ditolak:
 *  - Saldo baru tetap sama dengan saldo kartu
 *  - Status salah satu dari: "Invalid meals", "Daily meal limit exceeded",
 *    atau "Insufficient balance"
 *
 * Data pembelian:
 * | Informasi              | Nilai         |
 * | ---------------------- | ------------- |
 * | Nama Mahasiswa         | Putri Lestari |
 * | Saldo Kartu            | 60000         |
 * | Paket Makan            | 3             |
 * | Paket Dibeli Hari Ini  | 2             |
 * | Batas Paket Harian     | 6             |
 * | Ada Minuman            | Ya            |
 *
 * Tugas:
 * 1. Deklarasikan semua variabel dengan tipe data yang paling sesuai.
 * 2. Tentukan biaya minuman dengan if...else.
 * 3. Validasi pembelian sesuai urutan memakai if...else if...else.
 * 4. Tampilkan nama mahasiswa, biaya minuman, saldo baru, dan status.
 *
 * Expected output:
 *  Student: Putri Lestari
 *  Drink fee: 4000
 *  New balance: 20000
 *  Status: Success
 */

// Tulis solusi Anda di bawah ini.

/**
 * High Case 02 — Tiket Konser (OOP)
 * Points: 160 (High — OOP)
 *
 * Tiket konser Specta Show adalah suatu objek. Buat beberapa tiket, simpan ke dalam
 * array, dan ubah state lewat method class. Jangan membuat class gerbang,
 * dan jangan memasukkan array ke constructor.
 *
 * Data tiket:
 * | Kode | Kategori | Harga  | Sudah Dipakai |
 * | ---- | -------- | ------ | ------------- |
 * | A1   | regular  | 150000 | Tidak         |
 * | A2   | vip      | 350000 | Tidak         |
 * | A3   | regular  | 150000 | Ya            |
 * | A4   | vip      | 350000 | Tidak         |
 *
 * Class wajib Ticket (satu objek):
 *  - Properti: code, category, price, isUsed
 *  - getStatus() → "Used" jika isUsed true, selain itu "Valid"
 *  - markUsed() → set isUsed menjadi true
 *  - canEnter() → true hanya jika tiket belum dipakai
 *  - getRefund() → 0 jika sudah dipakai, selain itu 50% dari harga
 *
 * Tugas:
 * 1. Buat hanya class Ticket.
 * 2. Buat empat objek Ticket dengan new Ticket(...).
 * 3. Masukkan ke array: const tickets = [ticketA1, ticketA2, ticketA3, ticketA4]
 * 4. Panggil markUsed() pada A1.
 * 5. Tampilkan kode, status, canEnter, dan refund untuk setiap tiket.
 *
 * Expected output:
 *  A1 | Used | enter false | refund 0
 *  A2 | Valid | enter true | refund 175000
 *  A3 | Used | enter false | refund 0
 *  A4 | Valid | enter true | refund 175000
 */

// Tulis kode Anda di bawah ini.

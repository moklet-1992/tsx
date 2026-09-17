/**
 * High Case 05 — Laporan Tiket Servis (Array methods)
 * Points: 160 (High — Array methods)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar tiket dengan map, filter, reduce, some, dan every.
 *
 * Aturan biaya:
 *  - Biaya dasar = 15000
 *  - Biaya suku cadang = parts × 2500
 *  - Biaya zona: local 0, city 6000, upcountry 11000
 *  - Tambahan urgent = 8000 jika isUrgent true
 *
 * Array methods yang wajib:
 *  - map    → tambahkan field fee ke setiap tiket
 *  - filter → tiket terbuka (belum closed)
 *  - filter → terbuka dan urgent
 *  - reduce → total biaya tiket terbuka
 *  - some   → ada tiket terbuka yang upcountry
 *  - every  → setiap tiket local sudah closed
 *
 * Tugas:
 * 1. Tulis fungsi getZoneSurcharge(zone) dan getFee(ticket).
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan kode terbuka, kode urgent terbuka, total biaya terbuka,
 *    upcountry terbuka, dan all local closed.
 *
 * Expected output:
 *  Open: T1, T2, T4, T6
 *  Urgent open: T2, T4
 *  Total open fee: 189000
 *  Upcountry open: true
 *  All local closed: false
 */

const tickets = [
  { tracking: "T1", parts: 4, zone: "local", isUrgent: false, isClosed: false },
  { tracking: "T2", parts: 10, zone: "city", isUrgent: true, isClosed: false },
  { tracking: "T3", parts: 6, zone: "local", isUrgent: false, isClosed: true },
  { tracking: "T4", parts: 14, zone: "upcountry", isUrgent: true, isClosed: false },
  { tracking: "T5", parts: 3, zone: "local", isUrgent: false, isClosed: true },
  { tracking: "T6", parts: 8, zone: "city", isUrgent: false, isClosed: false },
];

// Tulis solusi Anda di bawah ini.

/**
 * High Case 05 — Laporan Bagasi Hilang (Array methods)
 * Points: 160 (High — Array methods)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar klaim dengan map, filter, reduce, some, dan every.
 *
 * Aturan biaya:
 *  - Biaya dasar = 10000
 *  - Biaya berat = kg × 2000
 *  - Biaya zona: domestic 0, international 8000, remote 15000
 *  - Tambahan prioritas = 9000 jika isPriority true
 *
 * Array methods yang wajib:
 *  - map    → tambahkan field fee ke setiap klaim
 *  - filter → klaim pending (belum settled)
 *  - filter → pending dan prioritas
 *  - reduce → total biaya klaim pending
 *  - some   → ada klaim pending yang remote
 *  - every  → setiap klaim domestic sudah settled
 *
 * Tugas:
 * 1. Tulis fungsi getZoneSurcharge(zone) dan getFee(claim).
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan kode pending, kode pending prioritas, total biaya pending,
 *    remote pending, dan all domestic settled.
 *
 * Expected output:
 *  Pending: B1, B2, B4, B6
 *  Priority pending: B2, B4
 *  Total pending fee: 203000
 *  Remote pending: true
 *  All domestic settled: false
 */

const claims = [
  { tracking: "B1", kg: 8, zone: "domestic", isPriority: false, isSettled: false },
  { tracking: "B2", kg: 15, zone: "international", isPriority: true, isSettled: false },
  { tracking: "B3", kg: 10, zone: "domestic", isPriority: false, isSettled: true },
  { tracking: "B4", kg: 22, zone: "remote", isPriority: true, isSettled: false },
  { tracking: "B5", kg: 6, zone: "domestic", isPriority: false, isSettled: true },
  { tracking: "B6", kg: 12, zone: "international", isPriority: false, isSettled: false },
];

// Tulis solusi Anda di bawah ini.

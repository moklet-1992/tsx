/**
 * High Case 04 — Laporan Pengisian EV (Array methods)
 * Points: 160 (High — Array methods)
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar sesi dengan map, filter, reduce, dan find.
 *
 * Hanya sesi yang selesai yang ditagih.
 *  - Biaya energi = kWh × 2500
 *  - Biaya idle   = (menit - 60) × 200, hanya jika menit > 60
 *  - Member mendapat diskon 10% dari biaya energi + idle
 *  - Sesi belum selesai biayanya 0
 *
 * Array methods yang wajib:
 *  - filter → sesi yang selesai
 *  - map    → invoice { id, fee }
 *  - reduce → total pendapatan sesi yang selesai
 *  - find   → sesi selesai dengan menit terbanyak
 *
 * Tugas:
 * 1. Tulis fungsi getFee(session) sesuai aturan di atas.
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan setiap invoice yang selesai, id sesi member, id terlama,
 *    dan total pendapatan.
 *
 * Expected output:
 *  C1: 27000
 *  C2: 54000
 *  C4: 35550
 *  C5: 68500
 *  Member sessions: C1, C4
 *  Longest session: C5
 *  Total revenue: 185050
 */

const sessions = [
  { id: "C1", kWh: 12, minutes: 45, isMember: true, isCompleted: true },
  { id: "C2", kWh: 20, minutes: 80, isMember: false, isCompleted: true },
  { id: "C3", kWh: 8, minutes: 30, isMember: true, isCompleted: false },
  { id: "C4", kWh: 15, minutes: 70, isMember: true, isCompleted: true },
  { id: "C5", kWh: 25, minutes: 90, isMember: false, isCompleted: true },
];

// Tulis kode Anda di bawah ini.

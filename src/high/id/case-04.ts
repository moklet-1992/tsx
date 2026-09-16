/**
 * High Case 04 — Laporan Kursus Bahasa (Array methods)
 * Points: 160 (High — Array methods)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar sesi dengan map, filter, reduce, dan find.
 *
 * Hanya sesi yang selesai yang ditagih.
 *  - Biaya pelajaran = jam × 35000
 *  - Biaya ekstra    = (extraMin - 15) × 400, hanya jika extraMin > 15
 *  - Member mendapat diskon 10% dari biaya pelajaran + ekstra
 *  - Sesi belum selesai biayanya 0
 *
 * Array methods yang wajib:
 *  - filter → sesi yang selesai
 *  - map    → invoice { id, fee }
 *  - reduce → total pendapatan sesi yang selesai
 *  - find   → sesi selesai dengan extraMin terbanyak
 *
 * Tugas:
 * 1. Tulis fungsi getFee(session) sesuai aturan di atas.
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan setiap invoice yang selesai, id sesi member, id terlama,
 *    dan total pendapatan.
 *
 * Expected output:
 *  E1: 252000
 *  E2: 424000
 *  E4: 316800
 *  E5: 500000
 *  Member sessions: E1, E4
 *  Longest session: E5
 *  Total revenue: 1492800
 */

const sessions = [
  { id: "E1", hours: 8, extraMin: 10, isMember: true, isCompleted: true },
  { id: "E2", hours: 12, extraMin: 25, isMember: false, isCompleted: true },
  { id: "E3", hours: 6, extraMin: 5, isMember: true, isCompleted: false },
  { id: "E4", hours: 10, extraMin: 20, isMember: true, isCompleted: true },
  { id: "E5", hours: 14, extraMin: 40, isMember: false, isCompleted: true },
];

// Tulis solusi Anda di bawah ini.

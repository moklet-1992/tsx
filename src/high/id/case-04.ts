/**
 * High Case 04 — Laporan Studio Foto (Array methods)
 * Points: 160 (High — Array methods)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar pesanan dengan map, filter, reduce, dan find.
 *
 * Hanya pesanan yang selesai yang ditagih.
 *  - Biaya cetak = jumlah cetak × 8000
 *  - Biaya kilat = (jamKilat - 4) × 1500, hanya jika jamKilat > 4
 *  - Member mendapat diskon 15% dari biaya cetak + kilat
 *  - Pesanan belum selesai biayanya 0
 *
 * Array methods yang wajib:
 *  - filter → pesanan yang selesai
 *  - map    → invoice { id, fee }
 *  - reduce → total pendapatan pesanan yang selesai
 *  - find   → pesanan selesai dengan jamKilat terbanyak
 *
 * Tugas:
 * 1. Tulis fungsi getFee(order) sesuai aturan di atas.
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan setiap invoice yang selesai, id pesanan member, id terlama,
 *    dan total pendapatan.
 *
 * Expected output:
 *  P1: 68000
 *  P2: 164500
 *  P4: 104550
 *  P5: 209000
 *  Member orders: P1, P4
 *  Longest order: P5
 *  Total revenue: 546050
 */

const orders = [
  { id: "P1", prints: 10, rushHours: 3, isMember: true, isCompleted: true },
  { id: "P2", prints: 20, rushHours: 7, isMember: false, isCompleted: true },
  { id: "P3", prints: 8, rushHours: 2, isMember: true, isCompleted: false },
  { id: "P4", prints: 15, rushHours: 6, isMember: true, isCompleted: true },
  { id: "P5", prints: 25, rushHours: 10, isMember: false, isCompleted: true },
];

// Tulis solusi Anda di bawah ini.

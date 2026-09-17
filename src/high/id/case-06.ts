/**
 * High Case 06 — Laporan Booking Studio Foto (Array methods)
 * Points: 160 (High — Array methods)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar studio dengan map, filter, reduce, dan every.
 *
 * Aturan tagihan:
 *  - Standard → (200000 × jam) + (40000 × lampu tambahan)
 *  - Premium  → (450000 × jam) + 120000 jika ada backdrop
 *
 * Array methods yang wajib:
 *  - filter → studio terisi
 *  - filter + map → nomor studio kosong
 *  - map    → { roomNo, bill } untuk studio terisi
 *  - reduce → total pendapatan studio terisi
 *  - filter + map → nomor studio premium yang kosong
 *  - every  → setiap tagihan studio terisi minimal 300000
 *
 * Tugas:
 * 1. Tulis fungsi getBill(studio) sesuai aturan di atas.
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan studio kosong, setiap tagihan studio terisi, premium kosong,
 *    total pendapatan, dan hasil cek every.
 *
 * Expected output:
 *  Vacant studios: 102, 203
 *  101: 920000
 *  201: 1020000
 *  202: 1350000
 *  103: 240000
 *  Vacant premium: 203
 *  Total revenue: 3530000
 *  All occupied above 300000: false
 */

const studios = [
  { roomNo: "101", type: "standard", isOccupied: true, hours: 4, extraLamps: 3, hasBackdrop: false },
  { roomNo: "102", type: "standard", isOccupied: false, hours: 0, extraLamps: 0, hasBackdrop: false },
  { roomNo: "201", type: "premium", isOccupied: true, hours: 2, extraLamps: 0, hasBackdrop: true },
  { roomNo: "202", type: "premium", isOccupied: true, hours: 3, extraLamps: 0, hasBackdrop: false },
  { roomNo: "103", type: "standard", isOccupied: true, hours: 1, extraLamps: 1, hasBackdrop: false },
  { roomNo: "203", type: "premium", isOccupied: false, hours: 2, extraLamps: 0, hasBackdrop: false },
];

// Tulis solusi Anda di bawah ini.

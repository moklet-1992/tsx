/**
 * High Case 06 — Laporan Ruang Rapat (Array methods)
 * Points: 160 (High — Array methods)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar ruangan dengan map, filter, reduce, dan every.
 *
 * Aturan tagihan:
 *  - Standard → (300000 × jam) + (50000 × tamu tambahan)
 *  - Suite    → (700000 × jam) + 200000 jika ada katering
 *
 * Array methods yang wajib:
 *  - filter → ruangan terisi
 *  - filter + map → nomor ruangan kosong
 *  - map    → { roomNo, bill } untuk ruangan terisi
 *  - reduce → total pendapatan ruangan terisi
 *  - filter + map → nomor suite yang kosong
 *  - every  → setiap tagihan ruangan terisi minimal 400000
 *
 * Tugas:
 * 1. Tulis fungsi getBill(room) sesuai aturan di atas.
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan ruangan kosong, setiap tagihan ruangan terisi, suite kosong,
 *    total pendapatan, dan hasil cek every.
 *
 * Expected output:
 *  Vacant rooms: 102, 203
 *  101: 1000000
 *  201: 1600000
 *  202: 2800000
 *  103: 350000
 *  Vacant suites: 203
 *  Total revenue: 5750000
 *  All occupied above 400000: false
 */

const rooms = [
  { roomNo: "101", type: "standard", isOccupied: true, hours: 3, extraGuests: 2, hasCatering: false },
  { roomNo: "102", type: "standard", isOccupied: false, hours: 0, extraGuests: 0, hasCatering: false },
  { roomNo: "201", type: "suite", isOccupied: true, hours: 2, extraGuests: 0, hasCatering: true },
  { roomNo: "202", type: "suite", isOccupied: true, hours: 4, extraGuests: 0, hasCatering: false },
  { roomNo: "103", type: "standard", isOccupied: true, hours: 1, extraGuests: 1, hasCatering: false },
  { roomNo: "203", type: "suite", isOccupied: false, hours: 2, extraGuests: 0, hasCatering: false },
];

// Tulis solusi Anda di bawah ini.

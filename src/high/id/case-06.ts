/**
 * High Case 06 — Laporan Malam Hotel (Array methods)
 * Points: 160 (High — Array methods)
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar kamar dengan map, filter, reduce, dan every.
 *
 * Aturan tagihan:
 *  - Standard → (450000 × malam) + (75000 × jumlah sarapan)
 *  - Suite    → (900000 × malam) + 150000 jika late checkout
 *
 * Array methods yang wajib:
 *  - filter → kamar terisi
 *  - filter + map → nomor kamar kosong
 *  - map    → { roomNo, bill } untuk kamar terisi
 *  - reduce → total pendapatan kamar terisi
 *  - filter + map → nomor suite yang kosong
 *  - every  → setiap tagihan kamar terisi minimal 600000
 *
 * Tugas:
 * 1. Tulis fungsi getBill(room) sesuai aturan di atas.
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan kamar kosong, setiap tagihan kamar terisi, suite kosong,
 *    total pendapatan, dan hasil cek every.
 *
 * Expected output:
 *  Vacant rooms: 102, 203
 *  101: 1050000
 *  201: 1050000
 *  202: 2700000
 *  103: 525000
 *  Vacant suites: 203
 *  Total revenue: 5325000
 *  All occupied above 600000: false
 */

const rooms = [
  { roomNo: "101", type: "standard", isOccupied: true, nights: 2, breakfastCount: 2, hasLateCheckout: false },
  { roomNo: "102", type: "standard", isOccupied: false, nights: 0, breakfastCount: 0, hasLateCheckout: false },
  { roomNo: "201", type: "suite", isOccupied: true, nights: 1, breakfastCount: 0, hasLateCheckout: true },
  { roomNo: "202", type: "suite", isOccupied: true, nights: 3, breakfastCount: 0, hasLateCheckout: false },
  { roomNo: "103", type: "standard", isOccupied: true, nights: 1, breakfastCount: 1, hasLateCheckout: false },
  { roomNo: "203", type: "suite", isOccupied: false, nights: 2, breakfastCount: 0, hasLateCheckout: false },
];

// Tulis kode Anda di bawah ini.

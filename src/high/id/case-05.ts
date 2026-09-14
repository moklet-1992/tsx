/**
 * High Case 05 — Laporan Dispatch Paket (Array methods)
 * Points: 160 (High — Array methods)
 *
 * Kasus ini hanya tentang array methods. Jangan membuat class.
 * Kerjakan langsung pada daftar paket dengan map, filter, reduce, some, dan every.
 *
 * Aturan biaya:
 *  - Biaya dasar = 8000
 *  - Biaya berat = berat × 1500
 *  - Biaya zona: city 0, outskirts 5000, remote 12000
 *  - Tambahan prioritas = 7000 jika isPriority true
 *
 * Array methods yang wajib:
 *  - map    → tambahkan field fee ke setiap paket
 *  - filter → paket pending (belum terkirim)
 *  - filter → pending dan prioritas
 *  - reduce → total biaya paket pending
 *  - some   → ada paket pending yang remote
 *  - every  → setiap paket city sudah terkirim
 *
 * Tugas:
 * 1. Tulis fungsi getZoneSurcharge(zone) dan getFee(parcel).
 * 2. Susun laporan dengan array methods. Jangan pakai for loop.
 * 3. Tampilkan kode pending, kode pending prioritas, total biaya pending,
 *    remote pending, dan all city delivered.
 *
 * Expected output:
 *  Pending: P1, P2, P4, P6
 *  Priority pending: P2, P4
 *  Total pending fee: 96500
 *  Remote pending: true
 *  All city delivered: false
 */

const parcels = [
  { tracking: "P1", weight: 2, zone: "city", isPriority: false, isDelivered: false },
  { tracking: "P2", weight: 5, zone: "outskirts", isPriority: true, isDelivered: false },
  { tracking: "P3", weight: 3, zone: "city", isPriority: false, isDelivered: true },
  { tracking: "P4", weight: 8, zone: "remote", isPriority: true, isDelivered: false },
  { tracking: "P5", weight: 1, zone: "city", isPriority: false, isDelivered: true },
  { tracking: "P6", weight: 4, zone: "outskirts", isPriority: false, isDelivered: false },
];

// Tulis kode Anda di bawah ini.

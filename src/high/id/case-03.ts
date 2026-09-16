/**
 * High Case 03 — Kru Pengiriman (OOP)
 * Points: 160 (High — OOP)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Rider dan dispatcher adalah objek berbeda yang berbagi class induk.
 * Buat setiap orang dengan new, lalu simpan dalam satu array. Jangan
 * membuat class roster/manager, dan jangan memasukkan array ke constructor.
 *
 * Data kru:
 * | Nama  | Peran      | Jam | Tambahan          |
 * | ----- | ---------- | --- | ----------------- |
 * | Maya  | Rider      | 36  | 10 drop malam     |
 * | Raka  | Rider      | 30  | 0 drop malam      |
 * | Lina  | Dispatcher | 20  | Tugas akhir pekan |
 * | Budi  | Dispatcher | 18  | Bukan akhir pekan |
 * | Sinta | Rider      | 40  | 8 drop malam      |
 *
 * Aturan gaji:
 *  - StaffMember.getPay() → jam × 40000
 *  - Rider.getPay()       → jam × 40000 + dropMalam × 15000
 *  - Dispatcher.getPay()  → jam × 70000 + 250000 jika tugas akhir pekan
 *
 * Class wajib StaffMember (satu orang):
 *  - Properti: name, hours
 *  - getRole() → "Staff"
 *  - getPay() → jam × 40000
 *
 * Class wajib Rider extends StaffMember:
 *  - Properti tambahan: nightDrops
 *  - getRole() → "Rider"
 *  - Override getPay()
 *
 * Class wajib Dispatcher extends StaffMember:
 *  - Properti tambahan: isWeekend
 *  - getRole() → "Dispatcher"
 *  - Override getPay()
 *
 * Tugas:
 * 1. Buat ketiga class. Jangan membuat class koleksi keempat.
 * 2. Buat setiap kru dengan new Rider(...) atau new Dispatcher(...).
 * 3. Masukkan ke array:
 *    const crew = [maya, raka, lina, budi, sinta]
 * 4. Tampilkan peran, nama, dan gaji setiap orang (loop for...of diperbolehkan).
 *
 * Expected output:
 *  Rider Maya: 1590000
 *  Rider Raka: 1200000
 *  Dispatcher Lina: 1650000
 *  Dispatcher Budi: 1260000
 *  Rider Sinta: 1720000
 */

// Tulis solusi Anda di bawah ini.

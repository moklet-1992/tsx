/**
 * High Case 03 — Kru Radio (OOP)
 * Points: 160 (High — OOP)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Host dan engineer adalah objek berbeda yang berbagi class induk.
 * Buat setiap orang dengan new, lalu simpan dalam satu array. Jangan
 * membuat class roster/manager, dan jangan memasukkan array ke constructor.
 *
 * Data kru:
 * | Nama  | Peran    | Jam | Tambahan       |
 * | ----- | -------- | --- | -------------- |
 * | Maya  | Host     | 28  | 6 jam siaran   |
 * | Raka  | Host     | 24  | 0 jam siaran   |
 * | Lina  | Engineer | 16  | Shift malam    |
 * | Budi  | Engineer | 20  | Bukan malam    |
 * | Sinta | Host     | 32  | 4 jam siaran   |
 *
 * Aturan gaji:
 *  - StaffMember.getPay() → jam × 35000
 *  - Host.getPay()        → jam × 35000 + jamSiaran × 20000
 *  - Engineer.getPay()    → jam × 55000 + 180000 jika shift malam
 *
 * Class wajib StaffMember (satu orang):
 *  - Properti: name, hours
 *  - getRole() → "Staff"
 *  - getPay() → jam × 35000
 *
 * Class wajib Host extends StaffMember:
 *  - Properti tambahan: liveHours
 *  - getRole() → "Host"
 *  - Override getPay()
 *
 * Class wajib Engineer extends StaffMember:
 *  - Properti tambahan: isNight
 *  - getRole() → "Engineer"
 *  - Override getPay()
 *
 * Tugas:
 * 1. Buat ketiga class. Jangan membuat class koleksi keempat.
 * 2. Buat setiap kru dengan new Host(...) atau new Engineer(...).
 * 3. Masukkan ke array:
 *    const crew = [maya, raka, lina, budi, sinta]
 * 4. Tampilkan peran, nama, dan gaji setiap orang (loop for...of diperbolehkan).
 *
 * Expected output:
 *  Host Maya: 1100000
 *  Host Raka: 840000
 *  Engineer Lina: 1060000
 *  Engineer Budi: 1100000
 *  Host Sinta: 1200000
 */

// Tulis solusi Anda di bawah ini.

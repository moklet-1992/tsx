/**
 * High Case 03 — Staf Klinik (OOP)
 * Points: 160 (High — OOP)
 *
 * Perawat dan dokter adalah objek berbeda yang berbagi class induk.
 * Buat setiap orang dengan new, lalu simpan ke dalam satu array. Jangan
 * membuat class roster/manager, dan jangan memasukkan array ke constructor.
 *
 * Data staf:
 * | Nama  | Peran  | Jam | Tambahan         |
 * | ----- | ------ | --- | ---------------- |
 * | Maya  | Nurse  | 40  | 8 jam malam      |
 * | Raka  | Nurse  | 36  | 0 jam malam      |
 * | Lina  | Doctor | 20  | On call          |
 * | Budi  | Doctor | 16  | Tidak on call    |
 * | Sinta | Nurse  | 42  | 12 jam malam     |
 *
 * Aturan gaji:
 *  - StaffMember.getPay() → jam × 50000
 *  - Nurse.getPay()       → jam × 50000 + jamMalam × 25000
 *  - Doctor.getPay()      → jam × 120000 + 400000 jika on call
 *
 * Class wajib StaffMember (satu orang):
 *  - Properti: name, hours
 *  - getRole() → "Staff"
 *  - getPay() → jam × 50000
 *
 * Class wajib Nurse extends StaffMember:
 *  - Properti tambahan: nightHours
 *  - getRole() → "Nurse"
 *  - Override getPay()
 *
 * Class wajib Doctor extends StaffMember:
 *  - Properti tambahan: isOnCall
 *  - getRole() → "Doctor"
 *  - Override getPay()
 *
 * Tugas:
 * 1. Buat ketiga class. Jangan membuat class koleksi keempat.
 * 2. Buat setiap staf dengan new Nurse(...) atau new Doctor(...).
 * 3. Masukkan ke array:
 *    const staff = [maya, raka, lina, budi, sinta]
 * 4. Tampilkan peran, nama, dan gaji setiap orang (loop for...of diperbolehkan).
 *
 * Expected output:
 *  Nurse Maya: 2200000
 *  Nurse Raka: 1800000
 *  Doctor Lina: 2800000
 *  Doctor Budi: 1920000
 *  Nurse Sinta: 2400000
 */

// Tulis kode Anda di bawah ini.

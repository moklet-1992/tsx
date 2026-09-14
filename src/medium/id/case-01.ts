/**
 * Medium Case 01 — Pantau Suhu Pabrik
 * Points: 140 (Medium)
 *
 * Pabrik mencatat suhu mesin setiap jam. Satu jam menjadi alert jika
 * suhu lebih dari 85. Jika ada 3 jam alert atau lebih, shift perlu
 * pemeriksaan shutdown.
 *
 * Suhu per jam:
 * [78, 82, 88, 91, 80, 86, 79, 84, 90, 77]
 *
 * Fungsi yang wajib:
 *  - isAlert(temperature) → true jika temperature > 85
 *  - countAlerts(temperatures) → berapa jam yang alert (pakai loop)
 *  - findHighest(temperatures) → suhu tertinggi (pakai loop)
 *
 * Status shift:
 *  - Jam alert >= 3 → "Shutdown check required"
 *  - Selain itu     → "Normal operation"
 *
 * Tugas:
 * 1. Buat ketiga fungsi di atas.
 * 2. Loop data suhu. Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan total jam, jam alert, suhu tertinggi, dan status shift.
 *
 * Expected output:
 *  Total hours: 10
 *  Alert hours: 4
 *  Highest temperature: 91
 *  Shutdown check required
 */

const temperatures = [78, 82, 88, 91, 80, 86, 79, 84, 90, 77];

// Tulis kode Anda di bawah ini.

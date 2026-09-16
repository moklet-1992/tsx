/**
 * Medium Case 01 — Pantau Banjir Sungai
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Pos sungai mencatat tinggi air setiap jam. Satu jam menjadi alert jika
 * tinggi air lebih dari 150. Jika ada 3 jam alert atau lebih, kota perlu
 * siaga evakuasi.
 *
 * Tinggi air per jam:
 * [120, 135, 148, 162, 140, 171, 155, 130, 168, 125]
 *
 * Fungsi yang wajib:
 *  - isAlert(level) → true jika level > 150
 *  - countAlerts(levels) → berapa jam yang alert (pakai loop)
 *  - findHighest(levels) → tinggi air tertinggi (pakai loop)
 *
 * Status kota:
 *  - Jam alert >= 3 → "Evacuate standby"
 *  - Selain itu     → "Normal watch"
 *
 * Tugas:
 * 1. Buat ketiga fungsi di atas.
 * 2. Loop data tinggi air. Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan total jam, jam alert, tinggi tertinggi, dan status kota.
 *
 * Expected output:
 *  Total hours: 10
 *  Alert hours: 4
 *  Highest level: 171
 *  Evacuate standby
 */

const waterLevels = [120, 135, 148, 162, 140, 171, 155, 130, 168, 125];

// Tulis solusi Anda di bawah ini.

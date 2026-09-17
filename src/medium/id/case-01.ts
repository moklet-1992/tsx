/**
 * Medium Case 01 — Pantau CPU Server
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Data center mencatat beban CPU setiap jam. Satu jam menjadi alert jika
 * beban lebih dari 80. Jika ada 3 jam alert atau lebih, cluster perlu scale out.
 *
 * Beban CPU per jam:
 * [42, 55, 71, 88, 64, 91, 77, 50, 86, 48]
 *
 * Fungsi yang wajib:
 *  - isAlert(load) → true jika load > 80
 *  - countAlerts(loads) → berapa jam yang alert (pakai loop)
 *  - findHighest(loads) → beban CPU tertinggi (pakai loop)
 *
 * Status cluster:
 *  - Jam alert >= 3 → "Scale out required"
 *  - Selain itu     → "Stable load"
 *
 * Tugas:
 * 1. Buat ketiga fungsi di atas.
 * 2. Loop data beban CPU. Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan total jam, jam alert, beban tertinggi, dan status cluster.
 *
 * Expected output:
 *  Total hours: 10
 *  Alert hours: 3
 *  Highest load: 91
 *  Scale out required
 */

const cpuLoads = [42, 55, 71, 88, 64, 91, 77, 50, 86, 48];

// Tulis solusi Anda di bawah ini.

/**
 * Medium Case 05 — Sampel Kualitas Udara
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Lab kota menguji 6 sampel udara. Klasifikasikan setiap sampel dari atas
 * ke bawah dan pakai aturan yang pertama kali cocok.
 *
 *  1. "Unsafe"  jika AQI > 150 ATAU pm25 > 75 ATAU ozone > 200
 *  2. "Caution" jika AQI > 80 ATAU pm25 > 35
 *  3. "Safe"    jika tidak termasuk di atas
 *
 * Keputusan kota:
 *  - Minimal satu sampel Unsafe → "Stop outdoor activity"
 *  - Selain itu                 → "Outdoor activity allowed"
 *
 * | Sampel | AQI | PM2.5 | Ozone |
 * | ------ | --- | ----- | ----- |
 * | S1     | 72  | 20    | 80    |
 * | S2     | 95  | 40    | 90    |
 * | S3     | 160 | 30    | 70    |
 * | S4     | 70  | 20    | 210   |
 * | S5     | 85  | 36    | 100   |
 * | S6     | 60  | 15    | 50    |
 *
 * Fungsi yang wajib:
 *  - classifySample(aqi, pm25, ozone) → "Unsafe", "Caution", atau "Safe"
 *  - getCityDecision(unsafeCount) → pesan keputusan kota
 *
 * Tugas:
 * 1. Buat kedua fungsi.
 * 2. Loop setiap sampel. Hitung Safe, Caution, dan Unsafe.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan hasil tiap sampel, ketiga jumlah, dan keputusan kota.
 *
 * Expected output:
 *  S1: Safe
 *  S2: Caution
 *  S3: Unsafe
 *  S4: Unsafe
 *  S5: Caution
 *  S6: Safe
 *  Safe: 2
 *  Caution: 2
 *  Unsafe: 2
 *  Stop outdoor activity
 */

const sampleNames = ["S1", "S2", "S3", "S4", "S5", "S6"];
const aqiValues = [72, 95, 160, 70, 85, 60];
const pm25Values = [20, 40, 30, 20, 36, 15];
const ozoneValues = [80, 90, 70, 210, 100, 50];

// Tulis solusi Anda di bawah ini.

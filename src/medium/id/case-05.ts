/**
 * Medium Case 05 — Sampel Kualitas Tanah
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Lab pertanian menguji 6 sampel tanah. Klasifikasikan setiap sampel dari
 * atas ke bawah dan pakai aturan yang pertama kali cocok.
 *
 *  1. "Unsafe"  jika pH < 5.0 ATAU pH > 8.5 ATAU metal > 10
 *  2. "Caution" jika pH < 6.0 ATAU pH > 7.8 ATAU metal > 4
 *  3. "Safe"    jika tidak termasuk di atas
 *
 * Keputusan kebun:
 *  - Minimal satu sampel Unsafe → "Stop planting"
 *  - Selain itu                 → "Planting allowed"
 *
 * | Sampel | pH  | Metal |
 * | ------ | --- | ----- |
 * | S1     | 6.5 | 2     |
 * | S2     | 5.8 | 3     |
 * | S3     | 4.9 | 1     |
 * | S4     | 7.0 | 12    |
 * | S5     | 7.9 | 2     |
 * | S6     | 6.8 | 1     |
 *
 * Fungsi yang wajib:
 *  - classifySample(ph, metal) → "Unsafe", "Caution", atau "Safe"
 *  - getFarmDecision(unsafeCount) → pesan keputusan kebun
 *
 * Tugas:
 * 1. Buat kedua fungsi.
 * 2. Loop setiap sampel. Hitung Safe, Caution, dan Unsafe.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan hasil tiap sampel, ketiga jumlah, dan keputusan kebun.
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
 *  Stop planting
 */

const sampleNames = ["S1", "S2", "S3", "S4", "S5", "S6"];
const phValues = [6.5, 5.8, 4.9, 7.0, 7.9, 6.8];
const metalValues = [2, 3, 1, 12, 2, 1];

// Tulis solusi Anda di bawah ini.

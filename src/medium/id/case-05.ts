/**
 * Medium Case 05 — Sampel Instalasi Air
 * Points: 140 (Medium)
 *
 * Instalasi air menguji 6 sampel. Klasifikasikan setiap sampel dari atas
 * ke bawah dan pakai aturan yang pertama kali cocok.
 *
 *  1. "Unsafe"  jika pH < 6.5 ATAU pH > 8.5 ATAU kekeruhan > 5 ATAU bakteri > 0
 *  2. "Caution" jika pH < 6.8 ATAU pH > 8.2 ATAU kekeruhan > 2
 *  3. "Safe"    jika tidak termasuk di atas
 *
 * Keputusan instalasi:
 *  - Minimal satu sampel Unsafe → "Stop distribution"
 *  - Selain itu                 → "Distribution allowed"
 *
 * | Sampel | pH  | Kekeruhan | Bakteri |
 * | ------ | --- | --------- | ------- |
 * | S1     | 7.2 | 1.0       | 0       |
 * | S2     | 6.6 | 2.5       | 0       |
 * | S3     | 8.7 | 1.2       | 0       |
 * | S4     | 7.0 | 0.8       | 1       |
 * | S5     | 7.4 | 3.0       | 0       |
 * | S6     | 7.1 | 1.5       | 0       |
 *
 * Fungsi yang wajib:
 *  - classifySample(ph, turbidity, bacteria) → "Unsafe", "Caution", atau "Safe"
 *  - getPlantDecision(unsafeCount) → pesan keputusan instalasi
 *
 * Tugas:
 * 1. Buat kedua fungsi.
 * 2. Loop setiap sampel. Hitung Safe, Caution, dan Unsafe.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan hasil tiap sampel, ketiga jumlah, dan keputusan instalasi.
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
 *  Stop distribution
 */

const sampleNames = ["S1", "S2", "S3", "S4", "S5", "S6"];
const phValues = [7.2, 6.6, 8.7, 7.0, 7.4, 7.1];
const turbidityValues = [1.0, 2.5, 1.2, 0.8, 3.0, 1.5];
const bacteriaValues = [0, 0, 0, 1, 0, 0];

// Tulis kode Anda di bawah ini.

/**
 * Medium Case 05 — Soil Quality Samples
 * Points: 140 (Medium)
 *
 * A farm lab tests 6 soil samples. Classify each sample from top to bottom
 * and use the first matching rule.
 *
 *  1. "Unsafe"  if pH < 5.0 OR pH > 8.5 OR metal > 10
 *  2. "Caution" if pH < 6.0 OR pH > 7.8 OR metal > 4
 *  3. "Safe"    otherwise
 *
 * Farm decision:
 *  - At least one Unsafe sample → "Stop planting"
 *  - Otherwise                  → "Planting allowed"
 *
 * | Sample | pH  | Metal |
 * | ------ | --- | ----- |
 * | S1     | 6.5 | 2     |
 * | S2     | 5.8 | 3     |
 * | S3     | 4.9 | 1     |
 * | S4     | 7.0 | 12    |
 * | S5     | 7.9 | 2     |
 * | S6     | 6.8 | 1     |
 *
 * Required functions:
 *  - classifySample(ph, metal) → "Unsafe", "Caution", or "Safe"
 *  - getFarmDecision(unsafeCount) → the farm decision message
 *
 * Tasks:
 * 1. Create both functions.
 * 2. Loop every sample. Count Safe, Caution, and Unsafe.
 *    Do not use map, filter, or reduce.
 * 3. Display each sample result, the three counts, and the farm decision.
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

// Write your solution below.

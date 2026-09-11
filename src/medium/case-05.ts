/**
 * Medium Case 05 — Water Plant Samples
 * Points: 140 (Medium)
 *
 * A water plant tests 6 samples. Classify each sample from top to bottom
 * and use the first matching rule.
 *
 *  1. "Unsafe"  if pH < 6.5 OR pH > 8.5 OR turbidity > 5 OR bacteria > 0
 *  2. "Caution" if pH < 6.8 OR pH > 8.2 OR turbidity > 2
 *  3. "Safe"    otherwise
 *
 * Plant decision:
 *  - At least one Unsafe sample → "Stop distribution"
 *  - Otherwise                  → "Distribution allowed"
 *
 * | Sample | pH  | Turbidity | Bacteria |
 * | ------ | --- | --------- | -------- |
 * | S1     | 7.2 | 1.0       | 0        |
 * | S2     | 6.6 | 2.5       | 0        |
 * | S3     | 8.7 | 1.2       | 0        |
 * | S4     | 7.0 | 0.8       | 1        |
 * | S5     | 7.4 | 3.0       | 0        |
 * | S6     | 7.1 | 1.5       | 0        |
 *
 * Required functions:
 *  - classifySample(ph, turbidity, bacteria) → "Unsafe", "Caution", or "Safe"
 *  - getPlantDecision(unsafeCount) → the plant decision message
 *
 * Tasks:
 * 1. Create both functions.
 * 2. Loop every sample. Count Safe, Caution, and Unsafe.
 *    Do not use map, filter, or reduce.
 * 3. Display each sample result, the three counts, and the plant decision.
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

// Write your solution below.

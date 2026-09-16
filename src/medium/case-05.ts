/**
 * Medium Case 05 — Air Quality Samples
 * Points: 140 (Medium)
 *
 * A city lab tests 6 air samples. Classify each sample from top to bottom
 * and use the first matching rule.
 *
 *  1. "Unsafe"  if AQI > 150 OR pm25 > 75 OR ozone > 200
 *  2. "Caution" if AQI > 80 OR pm25 > 35
 *  3. "Safe"    otherwise
 *
 * City decision:
 *  - At least one Unsafe sample → "Stop outdoor activity"
 *  - Otherwise                  → "Outdoor activity allowed"
 *
 * | Sample | AQI | PM2.5 | Ozone |
 * | ------ | --- | ----- | ----- |
 * | S1     | 72  | 20    | 80    |
 * | S2     | 95  | 40    | 90    |
 * | S3     | 160 | 30    | 70    |
 * | S4     | 70  | 20    | 210   |
 * | S5     | 85  | 36    | 100   |
 * | S6     | 60  | 15    | 50    |
 *
 * Required functions:
 *  - classifySample(aqi, pm25, ozone) → "Unsafe", "Caution", or "Safe"
 *  - getCityDecision(unsafeCount) → the city decision message
 *
 * Tasks:
 * 1. Create both functions.
 * 2. Loop every sample. Count Safe, Caution, and Unsafe.
 *    Do not use map, filter, or reduce.
 * 3. Display each sample result, the three counts, and the city decision.
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

// Write your solution below.

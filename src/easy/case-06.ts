/**
 * Easy Case 06 — Motorcycle Loan Pre-Check
 * Points: 100 (Easy)
 *
 * A finance company runs a first screening before a full loan review.
 * The application is pre-approved only when ALL of these rules are true:
 *  - Age is from 21 to 55 (inclusive)
 *  - Work experience is at least 12 months
 *  - Requested loan is not greater than the maximum loan
 *  - Debt ratio is not greater than 0.4
 *
 * Formulas:
 *  - Maximum loan = monthly income × 4
 *  - New installment = requested loan × 0.04
 *  - Debt ratio = (existing installment + new installment) / monthly income
 *
 * Applicant information:
 * | Information          | Value          |
 * | -------------------- | -------------- |
 * | Applicant Name       | Gibran Rakka   |
 * | Age                  | 24             |
 * | Work Months          | 18             |
 * | Monthly Income       | 6000000        |
 * | Existing Installment | 800000         |
 * | Requested Loan       | 20000000       |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Calculate maximum loan, new installment, and debt ratio.
 * 3. Combine every screening rule with logical operators.
 * 4. Display the applicant name, maximum loan, new installment, debt ratio,
 *    and one of these messages:
 *    - "Pre-approved"
 *    - "Rejected"
 *
 * Expected output:
 *  Applicant: Gibran Rakka
 *  Maximum loan: 24000000
 *  New installment: 800000
 *  Debt ratio: 0.2666... (or 0.27)
 *  Pre-approved
 */

// Write your solution below.

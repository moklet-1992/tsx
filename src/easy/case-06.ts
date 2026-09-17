/**
 * Easy Case 06 — Side-Hustle Loan Pre-Check
 * Points: 100 (Easy)
 *
 * A micro-finance office runs a first screening. The application is
 * pre-approved only when ALL of these rules are true:
 *  - Age is from 20 to 45 (inclusive)
 *  - Business age is at least 8 months
 *  - Requested loan is not greater than the maximum loan
 *  - Installment ratio is not greater than 0.25
 *
 * Formulas:
 *  - Maximum loan = monthly revenue × 3
 *  - New installment = requested loan × 0.05
 *  - Installment ratio = (existing installment + new installment) / monthly revenue
 *
 * Applicant information:
 * | Information          | Value      |
 * | -------------------- | ---------- |
 * | Applicant Name       | Wulan Sari |
 * | Age                  | 29         |
 * | Business Months      | 11         |
 * | Monthly Revenue      | 10000000   |
 * | Existing Installment | 1200000    |
 * | Requested Loan       | 18000000   |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Calculate maximum loan, new installment, and installment ratio.
 * 3. Combine every screening rule with logical operators.
 * 4. Display the applicant name, maximum loan, new installment,
 *    installment ratio, and one of these messages:
 *    - "Pre-approved"
 *    - "Rejected"
 *
 * Expected output:
 *  Applicant: Wulan Sari
 *  Maximum loan: 30000000
 *  New installment: 900000
 *  Installment ratio: 0.21
 *  Pre-approved
 */

// Write your solution below.

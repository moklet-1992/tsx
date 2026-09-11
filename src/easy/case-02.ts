/**
 * Easy Case 02 — ATM Cash Withdrawal
 * Points: 100 (Easy)
 *
 * An ATM must check the transaction in this exact order and stop at the
 * first failed rule:
 *  1. Withdrawal amount must be greater than 0
 *  2. Today's previous withdrawals + this withdrawal must not exceed
 *     the daily limit
 *  3. Withdrawal + admin fee must not exceed the account balance
 *
 * Admin fee:
 *  - Other-bank ATM → Rp7,500
 *  - Same-bank ATM  → Rp0
 *
 * If the transaction is accepted:
 *  - New balance = current balance - withdrawal - admin fee
 *  - Status = "Success"
 *
 * If the transaction is rejected:
 *  - New balance stays the same as the current balance
 *  - Status is one of: "Invalid amount", "Daily limit exceeded",
 *    or "Insufficient balance"
 *
 * Account information:
 * | Information            | Value        |
 * | ---------------------- | ------------ |
 * | Account Holder         | Bahlil Ulala |
 * | Current Balance        | 1250000      |
 * | Withdrawal Amount      | 500000       |
 * | Already Withdrawn Today| 300000       |
 * | Daily Limit            | 1000000      |
 * | Other-Bank ATM         | Yes          |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Determine the admin fee using if...else.
 * 3. Validate the transaction in the required order using if...else if...else.
 * 4. Display the account holder, admin fee, new balance, and status.
 *
 * Expected output:
 *  Account holder: Bahlil Ulala
 *  Admin fee: 7500
 *  New balance: 742500
 *  Status: Success
 */

// Write your solution below.

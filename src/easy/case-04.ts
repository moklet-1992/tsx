/**
 * Easy Case 04 — Food Delivery Quote
 * Points: 100 (Easy)
 *
 * A food delivery service first checks coverage, then builds the fee
 * from several parts.
 *
 * Coverage:
 *  - Distance greater than 12 km → status "Out of coverage" and total fee 0
 *  - Otherwise → status "Accepted" and calculate the fee below
 *
 * Fee parts when accepted:
 *  - Base fee = 7000
 *  - Distance fee = distance × 2000
 *  - Item fee = item count × 1000
 *  - Rain fee = 3000 if it is raining, otherwise 0
 *  - Peak fee = 8000 if it is peak hour, otherwise 0
 *  - Cutlery fee = 2000 if cutlery is requested, otherwise 0
 *  - Total fee = all parts added together
 *
 * Order information:
 * | Information     | Value       |
 * | --------------- | ----------- |
 * | Customer Name   | Andi Wijaya |
 * | Distance (km)   | 8           |
 * | Item Count      | 5           |
 * | Is Raining      | Yes         |
 * | Is Peak Hour    | Yes         |
 * | Request Cutlery | Yes         |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Reject the order when it is out of coverage.
 * 3. If accepted, calculate every fee part, then the total.
 * 4. Display the customer name, each fee part, total fee, and status.
 *
 * Expected output:
 *  Customer: Andi Wijaya
 *  Base fee: 7000
 *  Distance fee: 16000
 *  Item fee: 5000
 *  Rain fee: 3000
 *  Peak fee: 8000
 *  Cutlery fee: 2000
 *  Total fee: 41000
 *  Status: Accepted
 */

// Write your solution below.

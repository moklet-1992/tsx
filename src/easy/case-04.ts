/**
 * Easy Case 04 — Laundry Pickup Quote
 * Points: 100 (Easy)
 *
 * A laundry service first checks weight capacity, then builds the fee
 * from several parts.
 *
 * Capacity:
 *  - Weight greater than 15 kg → status "Out of service" and total fee 0
 *  - Otherwise → status "Accepted" and calculate the fee below
 *
 * Fee parts when accepted:
 *  - Base fee = 8000
 *  - Weight fee = weight × 6000
 *  - Express fee = 12000 if express is requested, otherwise 0
 *  - Ironing fee = 7000 if ironing is requested, otherwise 0
 *  - Fragrance fee = 3000 if fragrance is requested, otherwise 0
 *  - Weekend fee = 5000 if pickup is on weekend, otherwise 0
 *  - Total fee = all parts added together
 *
 * Order information:
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Customer Name   | Dina Maharani |
 * | Weight (kg)     | 8             |
 * | Express         | Yes           |
 * | Ironing         | Yes           |
 * | Fragrance       | No            |
 * | Is Weekend      | Yes           |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Reject the order when it is out of service.
 * 3. If accepted, calculate every fee part, then the total.
 * 4. Display the customer name, each fee part, total fee, and status.
 *
 * Expected output:
 *  Customer: Dina Maharani
 *  Base fee: 8000
 *  Weight fee: 48000
 *  Express fee: 12000
 *  Ironing fee: 7000
 *  Fragrance fee: 0
 *  Weekend fee: 5000
 *  Total fee: 80000
 *  Status: Accepted
 */

// Write your solution below.

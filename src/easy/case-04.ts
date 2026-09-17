/**
 * Easy Case 04 — Event Catering Quote
 * Points: 100 (Easy)
 *
 * A catering kitchen first checks capacity, then builds the fee from
 * several parts.
 *
 * Capacity:
 *  - Guest count greater than 80 → status "Out of capacity" and total fee 0
 *  - Otherwise → status "Accepted" and calculate the fee below
 *
 * Fee parts when accepted:
 *  - Base fee = 50000
 *  - Guest fee = guests × 35000
 *  - Dessert fee = 15000 if dessert is included, otherwise 0
 *  - Vegetarian fee = 20000 if vegetarian menu, otherwise 0
 *  - Weekend fee = 40000 if the event is on weekend, otherwise 0
 *  - Delivery fee = 25000 if delivery is requested, otherwise 0
 *  - Total fee = all parts added together
 *
 * Event information:
 * | Information     | Value          |
 * | --------------- | -------------- |
 * | Client Name     | Lila Anggraini |
 * | Guest Count     | 24             |
 * | Include Dessert | Yes            |
 * | Vegetarian Menu | Yes            |
 * | Is Weekend      | Yes            |
 * | Request Delivery| No             |
 *
 * Tasks:
 * 1. Declare all required variables using the most appropriate data types.
 * 2. Reject the event when it is out of capacity.
 * 3. If accepted, calculate every fee part, then the total.
 * 4. Display the client name, each fee part, total fee, and status.
 *
 * Expected output:
 *  Client: Lila Anggraini
 *  Base fee: 50000
 *  Guest fee: 840000
 *  Dessert fee: 15000
 *  Vegetarian fee: 20000
 *  Weekend fee: 40000
 *  Delivery fee: 0
 *  Total fee: 965000
 *  Status: Accepted
 */

// Write your solution below.

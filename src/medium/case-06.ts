/**
 * Medium Case 06 — Hotel Linen Restock
 * Points: 140 (Medium)
 *
 * A hotel laundry builds a restock plan. A product is restocked only when
 * current stock is below the minimum stock.
 *
 * | Product | Stock | Min Stock | Max Stock | Unit Price |
 * | ------- | ----- | --------- | --------- | ---------- |
 * | Towel   | 30    | 80        | 200       | 15000      |
 * | Sheet   | 90    | 80        | 180       | 25000      |
 * | Pillow  | 20    | 50        | 120       | 40000      |
 * | Blanket | 200   | 100       | 250       | 60000      |
 * | Robe    | 15    | 40        | 90        | 35000      |
 *
 * Formulas:
 *  - Reorder qty = max stock - current stock, when stock < min stock
 *  - Reorder qty = 0 when stock is already at or above min stock
 *  - Order cost = reorder qty × unit price
 *  - Priority = true when stock < min stock × 0.5
 *
 * Required functions:
 *  - needsRestock(stock, minStock) → true when stock < minStock
 *  - getReorderQty(stock, minStock, maxStock) → the reorder qty
 *  - isPriority(stock, minStock) → true when stock < minStock * 0.5
 *  - getOrderCost(qty, unitPrice) → qty × unitPrice
 *
 * Tasks:
 * 1. Create the four functions.
 * 2. Loop every product. Skip products whose reorder qty is 0.
 *    Do not use map, filter, or reduce.
 * 3. Display each restocked product (name, qty, priority, cost).
 * 4. Display how many products are restocked, how many are priority,
 *    the total order cost, and the product name with the highest order cost.
 *
 * Expected output:
 *  Towel | qty 170 | priority true | cost 2550000
 *  Pillow | qty 100 | priority true | cost 4000000
 *  Robe | qty 75 | priority true | cost 2625000
 *  Products restocked: 3
 *  Priority items: 3
 *  Total order cost: 9175000
 *  Highest cost item: Pillow
 */

const productNames = ["Towel", "Sheet", "Pillow", "Blanket", "Robe"];
const stocks = [30, 90, 20, 200, 15];
const minStocks = [80, 80, 50, 100, 40];
const maxStocks = [200, 180, 120, 250, 90];
const unitPrices = [15000, 25000, 40000, 60000, 35000];

// Write your solution below.

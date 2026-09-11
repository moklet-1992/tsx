/**
 * Medium Case 06 — Warehouse Restock Plan
 * Points: 140 (Medium)
 *
 * A warehouse builds a restock plan for spare parts. A product is restocked
 * only when current stock is below the minimum stock.
 *
 * | Product    | Stock | Min Stock | Max Stock | Unit Price |
 * | ---------- | ----- | --------- | --------- | ---------- |
 * | Bolt M8    | 40    | 100       | 400       | 500        |
 * | Nut M8     | 180   | 150       | 500       | 300        |
 * | Washer     | 20    | 80        | 300       | 200        |
 * | Screw 3cm  | 250   | 200       | 600       | 400        |
 * | Anchor     | 45    | 120       | 360       | 1500       |
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
 *  Bolt M8 | qty 360 | priority true | cost 180000
 *  Washer | qty 280 | priority true | cost 56000
 *  Anchor | qty 315 | priority true | cost 472500
 *  Products restocked: 3
 *  Priority items: 3
 *  Total order cost: 708500
 *  Highest cost item: Anchor
 */

const productNames = ["Bolt M8", "Nut M8", "Washer", "Screw 3cm", "Anchor"];
const stocks = [40, 180, 20, 250, 45];
const minStocks = [100, 150, 80, 200, 120];
const maxStocks = [400, 500, 300, 600, 360];
const unitPrices = [500, 300, 200, 400, 1500];

// Write your solution below.

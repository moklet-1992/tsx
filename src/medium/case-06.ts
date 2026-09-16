/**
 * Medium Case 06 — Fuel Station Restock
 * Points: 140 (Medium)
 *
 * A fuel station builds a restock plan. A product is restocked only when
 * current stock is below the minimum stock.
 *
 * | Product       | Stock | Min Stock | Max Stock | Unit Price |
 * | ------------- | ----- | --------- | --------- | ---------- |
 * | Pertalite     | 800   | 2000      | 8000      | 10000      |
 * | Pertamax      | 3500  | 2500      | 6000      | 14000      |
 * | Dexlite       | 400   | 1500      | 5000      | 15000      |
 * | Pertamina Dex | 5000  | 2000      | 7000      | 16000      |
 * | Biosolar      | 900   | 2200      | 6600      | 9000       |
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
 *  Pertalite | qty 7200 | priority true | cost 72000000
 *  Dexlite | qty 4600 | priority true | cost 69000000
 *  Biosolar | qty 5700 | priority true | cost 51300000
 *  Products restocked: 3
 *  Priority items: 3
 *  Total order cost: 192300000
 *  Highest cost item: Pertalite
 */

const productNames = ["Pertalite", "Pertamax", "Dexlite", "Pertamina Dex", "Biosolar"];
const stocks = [800, 3500, 400, 5000, 900];
const minStocks = [2000, 2500, 1500, 2000, 2200];
const maxStocks = [8000, 6000, 5000, 7000, 6600];
const unitPrices = [10000, 14000, 15000, 16000, 9000];

// Write your solution below.

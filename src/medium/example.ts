/**
 * Medium hint — functions, loops, and conditions
 *
 * This is NOT a case solution. Read it, then write your own case code.
 * Run: npm run dev src/medium/example.ts
 *
 * Patterns to copy:
 *  - write a named function that returns a value
 *  - walk a list with for or for...of
 *  - use if inside the loop
 *  - do not use map, filter, or reduce
 */

function isLargeOrder(qty: number): boolean {
  return qty >= 5;
}

function getPrice(qty: number): number {
  const unit = 12000;
  if (isLargeOrder(qty)) {
    return qty * unit * 0.9;
  }
  return qty * unit;
}

function countLargeOrders(quantities: number[]): number {
  let total = 0;
  for (const qty of quantities) {
    if (isLargeOrder(qty)) {
      total = total + 1;
    }
  }
  return total;
}

const quantities = [2, 6, 1, 8, 4];

console.log("Large orders:", countLargeOrders(quantities));

for (let i = 0; i < quantities.length; i++) {
  const qty = quantities[i];
  console.log("Order", i + 1, "| qty", qty, "| price", getPrice(qty));
}

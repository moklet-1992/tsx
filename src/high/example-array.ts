/**
 * High hint — array methods (cases 04–06)
 *
 * This is NOT a case solution. Read it, then write your own case code.
 * Run: npm run dev src/high/example-array.ts
 *
 * Patterns to copy:
 *  - do not create a class
 *  - query the list with map, filter, reduce, find, some, every
 *  - do not use a for loop
 */

const items = [
  { name: "Pen", price: 5000, inStock: true },
  { name: "Notebook", price: 18000, inStock: true },
  { name: "Stapler", price: 25000, inStock: false },
  { name: "Marker", price: 9000, inStock: true },
];

function getDiscountedPrice(item: { price: number; inStock: boolean }): number {
  if (!item.inStock) {
    return 0;
  }
  return item.price > 10000 ? item.price * 0.9 : item.price;
}

const available = items.filter((item) => item.inStock);
const names = available.map((item) => item.name);
const total = available.reduce((sum, item) => sum + getDiscountedPrice(item), 0);
const notebook = items.find((item) => item.name === "Notebook");
const hasExpensive = items.some((item) => item.price >= 20000);
const allPriced = items.every((item) => item.price > 0);

console.log("Available:", names.join(", "));
console.log("Notebook price:", notebook?.price);
console.log("Available total:", total);
console.log("Has expensive:", hasExpensive);
console.log("All priced:", allPriced);

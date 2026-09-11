/**
 * Easy hint — data types, operators, and conditions
 *
 * This is NOT a case solution. Read it, then write your own case code.
 * Run: npm run dev src/easy/example.ts
 *
 * Patterns to copy:
 *  - declare each value with a TypeScript type
 *  - calculate with operators
 *  - decide with if / else if / else
 *  - combine rules with && and ||
 */

const visitorName: string = "Tania";
const age: number = 19;
const hasMemberCard: boolean = true;
const hours: number = 3;

const baseFee: number = hours * 15000;
const memberDiscount: number = hasMemberCard ? baseFee * 0.2 : 0;
const finalFee: number = baseFee - memberDiscount;

let access: string;
if (age < 12) {
  access = "Child area only";
} else if (age >= 12 && age < 18) {
  access = "Teen area";
} else {
  access = "All areas";
}

const canUseLocker: boolean = hasMemberCard || age >= 18;

console.log("Visitor:", visitorName);
console.log("Base fee:", baseFee);
console.log("Discount:", memberDiscount);
console.log("Final fee:", finalFee);
console.log("Access:", access);
console.log("Locker:", canUseLocker);

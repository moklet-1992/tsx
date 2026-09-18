# TypeScript Assessments

A TypeScript project for completing assessment tasks.

## Prerequisites

| Tool | Minimum Version | Check Command |
|------|-----------------|---------------|
| [Node.js](https://nodejs.org/) | 18.x or later | `node --version` |
| [npm](https://www.npmjs.com/) | 9.x or later (comes with Node.js) | `npm --version` |

## Getting Started

```bash
npm install
npm run check
npm start
```

If you see `TypeScript assessment project is ready.`, the environment is set up.

## Running Code

```bash
# Run the entry file
npm start

# Run any TypeScript file
npm run dev src/index.ts

# Level hints (not case solutions)
npm run dev src/easy/example.ts
npm run dev src/medium/example.ts
npm run dev src/high/example-oop.ts
npm run dev src/high/example-array.ts

# Check all files for type errors
npm run check

# Compile TypeScript to JavaScript in dist/
npm run build
```

## Difficulty Levels

| Level | Status | Topics | Each case | Level cap |
|-------|--------|--------|-----------|-----------|
| Easy | Ready | Data types + operators + conditions | 100 | 250 |
| Medium | Ready | Conditions + looping + functions | 140 | 350 |
| High | Ready | Array methods or OOP (separated) | 160 | 400 |
| Very High | Coming next | Combined case studies | — | — |
| Advance | Coming next | Combined case studies | — | — |

Every case in the same level has the **same points**. Later cases are only harder to finish, not worth more. See [Exam Scoring](#exam-scoring).

## Bahasa Indonesia

Each case also has an Indonesian problem statement. The data, required function/class names, and **expected output stay in English** so marking is the same.

| English | Bahasa Indonesia |
|---------|------------------|
| `src/easy/case-01.ts` | `src/easy/id/case-01.ts` |
| `src/medium/case-01.ts` | `src/medium/id/case-01.ts` |
| `src/high/case-01.ts` | `src/high/id/case-01.ts` |

```bash
npm run dev src/easy/id/case-01.ts
npm run dev src/medium/id/case-01.ts
npm run dev src/high/id/case-01.ts
```

Kerjakan **salah satu** versi per kasus (Inggris atau Indonesia), bukan keduanya.

## Easy Level

Six case studies. Each one combines **data types**, **operators**, and **conditions**. They are still easy: no loops, functions, arrays, or OOP. The rules are heavier than daily drills — more than one decision, and calculations that feed the next check.

| File | Case | Skills | Points |
|------|------|--------|--------|
| `src/easy/case-01.ts` | Mountain Hiking Permit | many `&&` rules + nested route | 100 |
| `src/easy/case-02.ts` | Canteen Meal Card | ordered validation + drink fee | 100 |
| `src/easy/case-03.ts` | Fire Station Call | first-match `||` bands + fee | 100 |
| `src/easy/case-04.ts` | Laundry Pickup Quote | capacity gate + several fee parts | 100 |
| `src/easy/case-05.ts` | Camera Rental Damage Claim | conditional stolen-item rule + payout | 100 |
| `src/easy/case-06.ts` | Scholarship Stipend Pre-Check | ratio formulas + combined screening | 100 |

Mark each Easy case out of **100**: data types 30, operators/formulas 30, conditions 30, expected output 10. Easy level cap: **250**.

```bash
npm run dev src/easy/example.ts
npm run dev src/easy/case-01.ts
npm run dev src/easy/id/case-01.ts
npm run check
```

Read `src/easy/example.ts` first if you need a hint (types, operators, `if` / `&&` / `||`). Indonesian case text: `src/easy/id/`. Then write your solution below the comment, and compare the terminal output with the **Expected output**.

## Medium Level

Six case studies. Each one combines **conditions**, **looping**, and **functions**. Students must write named functions and process a list with `for` or `for...of`. Do not use `map`, `filter`, or `reduce`.

| File | Case | Skills | Points |
|------|------|--------|--------|
| `src/medium/case-01.ts` | Server CPU Watch | alert helper + loop counts | 140 |
| `src/medium/case-02.ts` | Stadium Gate Shift | fee function + type counts + surcharge | 140 |
| `src/medium/case-03.ts` | Dairy Expiry Watch | days-left status + recall | 140 |
| `src/medium/case-04.ts` | Coworking Parking | empty-spot search + parking check | 140 |
| `src/medium/case-05.ts` | Soil Quality Samples | first-match classify + farm decision | 140 |
| `src/medium/case-06.ts` | Hotel Linen Restock | four functions + skip + highest cost | 140 |

Mark each Medium case out of **140**: functions 50, looping 40, conditions 35, expected output 15. Medium level cap: **350**.

```bash
npm run dev src/medium/example.ts
npm run dev src/medium/case-01.ts
npm run dev src/medium/id/case-01.ts
```

Read `src/medium/example.ts` first if you need a hint (named functions, `for` / `for...of`, `if` inside the loop). Indonesian case text: `src/medium/id/`.

## High Level

Six case studies, split into two tracks. **Do not mix them.**

**OOP (cases 01–03).** A class models **one object**. Create each instance with `new`, then put those objects into an array yourself. Do **not** pass an array into a constructor, and do not create a manager/board/roster class.

```ts
const bike1 = new Bike("B01", 1, true, 8000);
const bike2 = new Bike("B02", 1, false, 8000);
const bikes = [bike1, bike2];
```

**Array methods (cases 04–06).** No classes. Work on the given object list with `map`, `filter`, `reduce`, `find`, `some`, and `every`. Do not use a `for` loop.

| File | Track | Case | Skills | Points |
|------|-------|------|--------|--------|
| `src/high/case-01.ts` | OOP | Bike Share | one class, `new`, array of instances | 160 |
| `src/high/case-02.ts` | OOP | Workshop Badge | methods that change state | 160 |
| `src/high/case-03.ts` | OOP | Radio Station Crew | inheritance + `getPay()` | 160 |
| `src/high/case-04.ts` | Array | Photo Studio Report | filter, map, reduce, find | 160 |
| `src/high/case-05.ts` | Array | Repair Ticket Report | filter, map, reduce, some, every | 160 |
| `src/high/case-06.ts` | Array | Photo Studio Booking Report | filter, map, reduce, every | 160 |

Mark each High case out of **160**.  
OOP: class design 80, methods 50, instances 15, output 15.  
Array: array methods 110, business rules 30, output 20.  
High level cap: **400**.

```bash
npm run dev src/high/example-oop.ts
npm run dev src/high/example-array.ts
npm run dev src/high/case-01.ts
npm run dev src/high/id/case-01.ts
```

Read `src/high/example-oop.ts` before cases 01–03, and `src/high/example-array.ts` before cases 04–06. Indonesian case text: `src/high/id/`. The examples are hints, not answers.

## Exam Scoring

Duration: **2 hours**. Final score: **1–1000**. Passing grade: **700**.

**How to calculate:** mark each case, **add the numbers**, then **stop at the level cap**. No ratios.

```
final = Easy + Medium + High
```

If any level has **0 cases**, final = **0**.

### Attempt rules

| Rule | Requirement |
|------|-------------|
| Minimum | **1 case per level**. Missing a level → exam score 0. |
| Recommended | **2 cases per level** (6 cases). This is the 2-hour plan. |
| Stretch | More cases only after those six are done. All 18 is not expected. |
| High level | If 2 High cases are submitted, use **1 OOP** (01–03) and **1 array** (04–06). |

### Points (same for every case in the level)

| Level | Full marks per case | 2 full cases | Level cap |
|-------|---------------------|--------------|-----------|
| Easy | **100** | 200 | **250** |
| Medium | **140** | 280 | **350** |
| High | **160** | 320 | **400** |
| **Total** | | **800** | **1000** |

Two full cases per level = **800** (already a pass). A third case in a level can add a little, until the cap.

### Time plan (120 minutes)

| Block | Time |
|-------|------|
| Read the briefs and choose cases | 10 min |
| Easy × 2 | 20 min |
| Medium × 2 | 35 min |
| High × 2 | 45 min |
| Review | 10 min |

### Recommended pairs

| Level | Pair |
|-------|------|
| Easy | Case 02 + Case 05 |
| Medium | Case 02 + Case 05 |
| High | Case 01 + Case 04 |

### Worked example

Student marks:

| Level | Case A | Case B | Sum | After cap |
|-------|--------|--------|-----|-----------|
| Easy | 80 | 90 | 170 | 170 (under 250) |
| Medium | 120 | 130 | 250 | 250 (under 350) |
| High | 140 | 150 | 290 | 290 (under 400) |

```
final = 170 + 250 + 290 = 710   → pass
```

If Easy was 100 + 100 + 80 = 280, Easy becomes **250** (cap). Then add Medium and High as usual.

### Typical totals

| What they do | Score | Result |
|--------------|-------|--------|
| 1 full case per level (100 + 140 + 160) | 400 | Fail |
| 2 cases per level, about 80% each | 640 | Fail |
| 2 cases per level, about 88% each | **700** | Pass |
| 2 full cases per level | **800** | Clear pass |
| 2 full per level + extra cases up to the caps | up to **1000** | Excellent |

### Grade bands

| Score | Meaning |
|------|---------|
| 900–1000 | Excellent |
| 800–899 | Very good |
| **700–799** | **Pass** |
| 500–699 | Fail (close) |
| 1–499 | Fail |
| 0 | Invalid paper (a level is missing) |

### Student summary

1. Do **at least one case in each level**.
2. Aim for **two cases per level**.
3. Teacher **adds your case marks**, then applies the level cap.
4. Six full cases = **800 / 1000** (pass).
5. Two hours is for **six cases**, not eighteen.

## Project Structure

```
typescript-assessments/
├── src/
│   ├── easy/
│   │   ├── example.ts
│   │   ├── case-01.ts … case-06.ts
│   │   └── id/                  # Bahasa Indonesia
│   ├── medium/
│   │   ├── example.ts
│   │   ├── case-01.ts … case-06.ts
│   │   └── id/
│   ├── high/
│   │   ├── example-oop.ts
│   │   ├── example-array.ts
│   │   ├── case-01.ts … case-06.ts
│   │   └── id/
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

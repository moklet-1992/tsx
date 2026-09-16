/**
 * Medium Case 06 — Restok SPBU
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * SPBU menyusun rencana restok. Produk di-restok hanya jika stok saat ini
 * di bawah stok minimum.
 *
 * | Produk        | Stok | Stok Min | Stok Maks | Harga Satuan |
 * | ------------- | ---- | -------- | --------- | ------------ |
 * | Pertalite     | 800  | 2000     | 8000      | 10000        |
 * | Pertamax      | 3500 | 2500     | 6000      | 14000        |
 * | Dexlite       | 400  | 1500     | 5000      | 15000        |
 * | Pertamina Dex | 5000 | 2000     | 7000      | 16000        |
 * | Biosolar      | 900  | 2200     | 6600      | 9000         |
 *
 * Rumus:
 *  - Qty restok = stok maks - stok saat ini, jika stok < stok min
 *  - Qty restok = 0 jika stok sudah sama atau di atas stok min
 *  - Biaya pesanan = qty restok × harga satuan
 *  - Prioritas = true jika stok < stok min × 0.5
 *
 * Fungsi yang wajib:
 *  - needsRestock(stock, minStock) → true jika stock < minStock
 *  - getReorderQty(stock, minStock, maxStock) → qty restok
 *  - isPriority(stock, minStock) → true jika stock < minStock * 0.5
 *  - getOrderCost(qty, unitPrice) → qty × unitPrice
 *
 * Tugas:
 * 1. Buat keempat fungsi.
 * 2. Loop setiap produk. Lewati produk yang qty restok-nya 0.
 *    Jangan pakai map, filter, atau reduce.
 * 3. Tampilkan setiap produk yang di-restok (nama, qty, prioritas, biaya).
 * 4. Tampilkan berapa produk di-restok, berapa yang prioritas,
 *    total biaya pesanan, dan nama produk dengan biaya tertinggi.
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

// Tulis solusi Anda di bawah ini.

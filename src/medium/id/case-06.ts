/**
 * Medium Case 06 — Restok Linen Hotel
 * Points: 140 (Medium)
 * Versi Bahasa Indonesia. Expected output sama dengan versi Inggris.
 *
 * Laundry hotel menyusun rencana restok. Produk di-restok hanya jika stok
 * saat ini di bawah stok minimum.
 *
 * | Produk  | Stok | Stok Min | Stok Maks | Harga Satuan |
 * | ------- | ---- | -------- | --------- | ------------ |
 * | Towel   | 30   | 80       | 200       | 15000        |
 * | Sheet   | 90   | 80       | 180       | 25000        |
 * | Pillow  | 20   | 50       | 120       | 40000        |
 * | Blanket | 200  | 100      | 250       | 60000        |
 * | Robe    | 15   | 40       | 90        | 35000        |
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

// Tulis solusi Anda di bawah ini.

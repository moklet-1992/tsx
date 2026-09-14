/**
 * Medium Case 06 — Rencana Restok Gudang
 * Points: 140 (Medium)
 *
 * Gudang menyusun rencana restok suku cadang. Produk di-restok hanya jika
 * stok saat ini di bawah stok minimum.
 *
 * | Produk     | Stok | Stok Min | Stok Maks | Harga Satuan |
 * | ---------- | ---- | -------- | --------- | ------------ |
 * | Bolt M8    | 40   | 100      | 400       | 500          |
 * | Nut M8     | 180  | 150      | 500       | 300          |
 * | Washer     | 20   | 80       | 300       | 200          |
 * | Screw 3cm  | 250  | 200      | 600       | 400          |
 * | Anchor     | 45   | 120      | 360       | 1500         |
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

// Tulis kode Anda di bawah ini.

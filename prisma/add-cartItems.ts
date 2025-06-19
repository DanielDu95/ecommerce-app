import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userId = "cmbp5jz4s0004v536zm2s8e52";

  // Get some example products to add to cart
  const products = await prisma.product.findMany({
    take: 4, // adjust as needed
  });

  if (products.length === 0) {
    throw new Error("No products found to add to cart.");
  }

  const cartItemsData = products.map((product, index) => ({
    userId,
    productId: product.id,
    quantity: index + 1, // e.g. 1, 2, ...
  }));

  const cartItems = await prisma.cartItem.createMany({
    data: cartItemsData,
  });

  console.log(`✅ Added ${cartItems.count} cart items for user ${userId}`);
}

main()
  .catch((e) => {
    console.error("❌ Error adding cart items:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

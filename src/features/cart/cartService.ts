// lib/cartService.ts
import { prisma } from "@/lib/prisma";

export async function getCartItems(userId?: string) {
  // You can expand this based on session/auth
  return await prisma.cartItem.findMany({
    where: {
      userId: userId,
    },
    include: {
      product: true,
    },
  });
}

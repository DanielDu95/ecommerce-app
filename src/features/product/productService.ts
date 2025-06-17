import { prisma } from "@/lib/prisma";
import { CreateProductInput } from "./types";

export async function getAllProducts() {
  return await prisma.product.findMany({ include: { user: true } });
}

export const getProductById = async (id: string) => {
  return prisma.product.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, name: true, email: true } },
      category: true,
    },
  });
};

export async function createProduct(data: CreateProductInput) {
  return await prisma.product.create({ data });
}

export async function updateProduct(
  id: string,
  data: Partial<CreateProductInput>,
) {
  return await prisma.product.update({
    where: { id },
    data,
  });
}

export async function deleteProduct(id: string) {
  return await prisma.product.delete({ where: { id } });
}

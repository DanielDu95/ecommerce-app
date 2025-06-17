import { prisma } from "@/lib/prisma";
import { ProductCard, ProductCardSkeleton } from "./ProductCard";

interface ProductListProps {
  limit?: number;
}

export async function ProductList({ limit }: ProductListProps) {
  const products = await prisma.product.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

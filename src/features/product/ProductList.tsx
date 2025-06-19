import { prisma } from "@/lib/prisma";
import { ProductCard } from "./ProductCard";
import { Product } from "./types";
import { toProduct } from "@/lib/utils";

interface ProductListProps {
  limit?: number;
  title?: string;
}

export async function ProductList({ limit = 6, title }: ProductListProps) {
  const productsFromDb = await prisma.product.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  const products: Product[] = productsFromDb.map(toProduct);

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No products available.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// /app/products/page.tsx

import { Metadata } from "next";
import { ProductCard } from "@/features/product/ProductCard"; // Adjust path as needed
import { getAllProducts } from "@/features/product/productService"; // You'd implement this function to fetch data from your DB
import { Product } from "@/features/product/types";
import { toProduct } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse all our products",
};

export default async function ProductsPage() {
  const productsFromDb = await getAllProducts();

  const products: Product[] = productsFromDb.map(toProduct);
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

import { ProductCard } from "./ProductCard";
import type { Product } from "./types";

interface ProductListProps {
  limit?: number;
  featured?: boolean;
  category?: string;
}

// Mock data - replace with actual data fetching
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    sale: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Professional Camera Lens",
    price: 599.99,
    originalPrice: 699.99,
    image: "/placeholder.svg?height=300&width=300",
    sale: true,
  },
  {
    id: "5",
    name: "Minimalist Desk Lamp",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "7",
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "8",
    name: "Eco-Friendly Water Bottle",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
  },
];

export function ProductList({ limit, featured, category }: ProductListProps) {
  let products = mockProducts;

  if (limit) {
    products = products.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

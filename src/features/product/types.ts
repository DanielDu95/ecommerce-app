// product/types.ts

export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;

  // Relations
  userId: string;
  user?: {
    id: string;
    name?: string;
    email: string;
  };

  categoryId?: string;
  category?: {
    id: string;
    name: string;
  };

  // Optional extras (not in schema but useful for frontend UI)
  rating?: number;
  reviewCount?: number;
  sale?: boolean;
  featured?: boolean;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sale?: boolean;
  featured?: boolean;
}

export interface CreateProductInput {
  title: string;
  description?: string;
  price: number;
  image?: string;
  userId: string;
  categoryId?: string;
  inStock?: boolean;
}

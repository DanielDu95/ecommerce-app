export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  description?: string;
  category?: string;
  sale?: boolean;
  featured?: boolean;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sale?: boolean;
  featured?: boolean;
}

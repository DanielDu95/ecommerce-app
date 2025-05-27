import { Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CategoriesSection from "@/components/sections/CategoriesSection";
import PromoBanner from "@/components/sections/PromoBanner";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { ProductCardSkeleton } from "@/features/product/ProductCard";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedProducts />
      </Suspense>

      <CategoriesSection />

      <PromoBanner />

      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedProducts title="Best Sellers" />
      </Suspense>

      <NewsletterSection />
    </main>
  );
}

function FeaturedProductsSkeleton() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

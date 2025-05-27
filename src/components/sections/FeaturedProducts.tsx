import { ProductList } from "@/features/product/ProductList";

interface FeaturedProductsProps {
  title?: string;
}

export default function FeaturedProducts({
  title = "Featured Products",
}: FeaturedProductsProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products that our
            customers love most
          </p>
        </div>

        <ProductList limit={8} featured={true} />
      </div>
    </section>
  );
}

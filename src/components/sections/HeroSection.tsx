import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden theme-transition">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="block text-brand-gradient">Products</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Shop the latest trends and find everything you need in one
                place. Quality products, unbeatable prices, and fast delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 theme-transition-fast"
                asChild
              >
                <Link href="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black theme-transition-fast"
                asChild
              >
                <Link href="/categories">
                  Explore Categories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-brand-gradient rounded-full blur-3xl opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 flex items-center justify-center theme-transition">
                  <ShoppingBag className="h-12 w-12 text-purple-400" />
                </div>
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 flex items-center justify-center theme-transition">
                  <div className="h-12 w-12 bg-brand-gradient rounded-lg"></div>
                </div>
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 flex items-center justify-center theme-transition">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
                </div>
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 flex items-center justify-center theme-transition">
                  <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

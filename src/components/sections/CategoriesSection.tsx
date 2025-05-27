import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shirt,
  Smartphone,
  Home,
  Gamepad2,
  Book,
  Dumbbell,
} from "lucide-react";

const categories = [
  {
    name: "Fashion",
    icon: Shirt,
    href: "/categories/fashion",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Electronics",
    icon: Smartphone,
    href: "/categories/electronics",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Home & Garden",
    icon: Home,
    href: "/categories/home-garden",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    href: "/categories/gaming",
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Books",
    icon: Book,
    href: "/categories/books",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Sports",
    icon: Dumbbell,
    href: "/categories/sports",
    color: "from-red-500 to-pink-500",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our diverse range of categories to find exactly what
            you&apos;re looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} href={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

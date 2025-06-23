// app/categories/page.tsx

import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="p-4 border rounded hover:bg-gray-100 transition"
          >
            <h2 className="text-lg font-semibold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

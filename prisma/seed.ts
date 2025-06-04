// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create categories
  const electronics = await prisma.category.create({
    data: { name: "Electronics" },
  });

  const fashion = await prisma.category.create({
    data: { name: "Fashion" },
  });

  // Create a user
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
      password: "hashedpassword", // In real app, hash the password
    },
  });

  // Create products
  await prisma.product.createMany({
    data: [
      {
        title: "Smartphone",
        description: "High-end smartphone",
        price: 799.99,
        inStock: true,
        userId: user.id,
        categoryId: electronics.id,
      },
      {
        title: "Jeans",
        description: "Blue denim jeans",
        price: 49.99,
        inStock: true,
        userId: user.id,
        categoryId: fashion.id,
      },
    ],
  });

  console.log("✅ Test data inserted");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

// prisma/seed.ts

import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  // Create some categories
  const electronics = await prisma.category.create({
    data: {
      name: "Electronics",
    },
  });

  const clothing = await prisma.category.create({
    data: {
      name: "Clothing",
    },
  });

  // Create some users
  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin User",
      password: "hashedpassword", // in real cases hash it
      role: Role.ADMIN,
    },
  });

  const seller = await prisma.user.create({
    data: {
      email: "seller@example.com",
      name: "Seller User",
      password: "hashedpassword",
      role: Role.SELLER,
    },
  });

  const consumer = await prisma.user.create({
    data: {
      email: "consumer@example.com",
      name: "Consumer User",
      password: "hashedpassword",
      role: Role.CONSUMER,
    },
  });

  // Create some products
  const product1 = await prisma.product.create({
    data: {
      title: "Smartphone",
      description: "Latest model smartphone",
      price: 699.99,
      image: "https://example.com/smartphone.jpg",
      userId: seller.id,
      categoryId: electronics.id,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      title: "Jeans",
      description: "Comfortable blue jeans",
      price: 49.99,
      image: "https://example.com/jeans.jpg",
      userId: seller.id,
      categoryId: clothing.id,
    },
  });

  // Create an order
  const order = await prisma.order.create({
    data: {
      userId: consumer.id,
      total: product1.price * 2 + product2.price * 1,
      items: {
        create: [
          {
            productId: product1.id,
            quantity: 2,
          },
          {
            productId: product2.id,
            quantity: 1,
          },
        ],
      },
    },
  });

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

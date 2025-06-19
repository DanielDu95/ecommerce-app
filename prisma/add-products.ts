// prisma/add-products.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const seller = await prisma.user.findFirstOrThrow({
    where: { email: "seller@example.com" },
  });

  const electronics = await prisma.category.findFirstOrThrow({
    where: { name: "Electronics" },
  });

  const clothing = await prisma.category.findFirstOrThrow({
    where: { name: "Clothing" },
  });

  await prisma.product.createMany({
    data: [
      {
        title: "Bluetooth Headphones",
        description: "Wireless headphones with noise cancellation",
        price: 89.99,
        image: "https://example.com/headphones.jpg",
        // https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: electronics.id,
      },
      {
        title: "Smartwatch",
        description: "Track your health and notifications on your wrist",
        price: 199.99,
        image: "https://example.com/smartwatch.jpg",
        // https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: electronics.id,
      },
      {
        title: "Wireless Mouse",
        description: "Ergonomic wireless mouse with long battery life",
        price: 29.99,
        image: "https://example.com/mouse.jpg",
        // https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: electronics.id,
      },
      {
        title: "Laptop Backpack",
        description: "Durable backpack with laptop compartment",
        price: 49.99,
        image: "https://example.com/backpack.jpg",
        // https://images.unsplash.com/photo-1667411424771-cadd97150827?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: electronics.id,
      },
      {
        title: "Gaming Keyboard",
        description: "RGB mechanical keyboard for gaming",
        price: 79.99,
        image: "https://example.com/keyboard.jpg",
        // https://images.unsplash.com/photo-1637243218672-d338945efdf7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: electronics.id,
      },
      {
        title: "Men's Hoodie",
        description: "Comfortable fleece hoodie in various sizes",
        price: 39.99,
        image: "https://example.com/hoodie.jpg",
        // https://images.unsplash.com/photo-1624421919156-9f126e5500a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: clothing.id,
      },
      {
        title: "Women's Jacket",
        description: "Stylish jacket for cold weather",
        price: 69.99,
        image: "https://example.com/jacket.jpg",
        // https://plus.unsplash.com/premium_photo-1673757117975-10360fc39efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: clothing.id,
      },
      {
        title: "Sneakers",
        description: "Comfortable and trendy sneakers",
        price: 59.99,
        image: "https://example.com/sneakers.jpg",
        // https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: clothing.id,
      },
      {
        title: "T-shirt Pack",
        description: "Pack of 3 basic cotton t-shirts",
        price: 24.99,
        image: "https://example.com/tshirts.jpg",
        // https://images.unsplash.com/photo-1628068431732-b8d752c52523?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: clothing.id,
      },
      {
        title: "Baseball Cap",
        description: "Adjustable cap with embroidered logo",
        price: 14.99,
        image: "https://example.com/cap.jpg",
        // https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        userId: seller.id,
        categoryId: clothing.id,
      },
    ],
  });

  console.log("10 new products added.");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

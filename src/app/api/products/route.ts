// app/api/products/route.ts

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all products
export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      user: true,
    },
  });

  return NextResponse.json({
    message: "Fetched all products",
    data: products,
  });
}

// CREATE a new product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, price, image, userId, categoryId, inStock } =
      body;

    const newProduct = await prisma.product.create({
      data: {
        title,
        description,
        price,
        image,
        userId,
        categoryId,
        inStock,
      },
    });

    return NextResponse.json({
      message: "Product created",
      data: newProduct,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating product", error },
      { status: 500 },
    );
  }
}

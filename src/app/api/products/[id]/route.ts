// app/api/products/[id]/route.ts

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET single product by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: { user: true, category: true },
  });

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Fetched product", data: product });
}

// UPDATE product
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = await request.json();

  try {
    const updated = await prisma.product.update({
      where: { id },
      data: body,
    });

    return NextResponse.json({ message: "Product updated", data: updated });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating product", error },
      { status: 500 },
    );
  }
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting product", error },
      { status: 500 },
    );
  }
}

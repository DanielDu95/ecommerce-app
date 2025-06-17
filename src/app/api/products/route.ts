// app/api/products/[id]/route.ts

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "@/features/product/productService";
import { NextResponse } from "next/server";

// GET all products
export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json({
      message: "Fetched all products",
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch products", error },
      { status: 500 },
    );
  }
}

// CREATE a new product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const product = await createProduct(body);
    return NextResponse.json(
      { message: "Product created", data: product },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create product", error },
      { status: 500 },
    );
  }
}

// UPDATE product - expects ?id=xxx in URL
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 },
      );

    const body = await request.json();
    const updated = await updateProduct(id, body);

    return NextResponse.json({ message: "Product updated", data: updated });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update product", error },
      { status: 500 },
    );
  }
}

// DELETE product - expects ?id=xxx in URL
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 },
      );

    const deleted = await deleteProduct(id);
    return NextResponse.json({ message: "Product deleted", data: deleted });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete product", error },
      { status: 500 },
    );
  }
}

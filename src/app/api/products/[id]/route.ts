import { NextRequest, NextResponse } from "next/server";
import {
  getProductById,
  updateProduct,
  deleteProduct,
} from "@/features/product/productService";

type ParamsContext = { params: { id: string } };

// GET /api/products/:id
export async function GET(_req: NextRequest, context: ParamsContext) {
  const { id } = context.params;
  try {
    const product = await getProductById(id);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ message: "Product fetched", data: product });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching product", error },
      { status: 500 },
    );
  }
}

// PATCH /api/products/:id
export async function PATCH(req: NextRequest, context: ParamsContext) {
  try {
    const body = await req.json();
    const updated = await updateProduct(context.params.id, body);
    return NextResponse.json({ message: "Product updated", data: updated });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating product", error },
      { status: 500 },
    );
  }
}

// DELETE /api/products/:id
export async function DELETE(_req: NextRequest, context: ParamsContext) {
  try {
    const deleted = await deleteProduct(context.params.id);
    return NextResponse.json({ message: "Product deleted", data: deleted });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting product", error },
      { status: 500 },
    );
  }
}

// app/cart/page.tsx

import { getCartItems } from "@/features/cart/cartService"; // You create this function
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils"; // optional price formatter

export default async function CartPage() {
  const cartItems = await getCartItems("cmbp5jz4s0004v536zm2s8e52"); // Fetch from DB or session

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
        <Link
          href="/products"
          className="text-primary-500 hover:underline font-medium"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.product.image || ""}
                alt={item.product.title}
                width={80}
                height={80}
                className="rounded"
              />
              <div>
                <h2 className="font-medium">{item.product.title}</h2>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">{formatPrice(item.product.price)}</p>
              <p className="text-sm text-gray-500">
                Subtotal: {formatPrice(item.product.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center border-t pt-6">
        <p className="text-lg font-bold">Total: {formatPrice(total)}</p>
        <Link
          href="/checkout"
          className="bg-primary-500 text-white px-6 py-2 rounded hover:bg-primary-600 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

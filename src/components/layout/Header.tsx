"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/features/cart/useCartStore";
import { useState } from "react";

export function Header() {
  const { data: session } = useSession();
  const cartItems = useCartStore((state) => state.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-brand-gradient rounded-lg"></div>
            <span className="font-bold text-xl">ECommerce</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/products"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Deals
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-gradient text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Account */}
            {session ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/account">
                    <User className="h-5 w-5" />
                    <span className="hidden sm:inline ml-2">
                      {session.user?.name}
                    </span>
                  </Link>
                </Button>
                <Button variant="outline" size="sm" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/products"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/deals"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
              >
                Deals
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
              >
                About
              </Link>
              <div className="pt-2">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

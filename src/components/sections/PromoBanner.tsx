import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-16 px-4 bg-brand-gradient text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Gift className="h-12 w-12" />
          </div>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Special Offer!</h2>
        <p className="text-xl mb-8 opacity-90">
          Get 25% off on all products. Limited time offer - don&apos;t miss out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
            asChild
          >
            <Link href="/products?sale=true">Shop Sale Items</Link>
          </Button>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>Offer ends in 3 days</span>
          </div>
        </div>

        <p className="text-sm opacity-75">
          Use code{" "}
          <span className="font-mono bg-white/20 px-2 py-1 rounded">
            SAVE25
          </span>{" "}
          at checkout
        </p>
      </div>
    </section>
  );
}

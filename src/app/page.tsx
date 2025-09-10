import ProductCount, { ProductCountSkeleton } from "@/features/product/product-count";
import ProductMostInStock, { ProductMostInStockSkeleton } from "@/features/product/product-most-stock";
import ProductOutOfStock, { ProductOutOfStockSkeleton } from "@/features/product/product-out-stock";
import { Suspense } from "react";

export default async function HomePage() {


  return (
    <>
      <h1 className="text-4xl">Demo Next.js</h1>

      <Suspense fallback={<ProductCountSkeleton />}>
        <ProductCount />
      </Suspense>

      <Suspense fallback={<ProductMostInStockSkeleton />}>
        <ProductMostInStock />
      </Suspense>

      <Suspense fallback={<ProductOutOfStockSkeleton />}>
        <ProductOutOfStock />
      </Suspense>

    </>
  );
}

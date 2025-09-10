import ProductCountDisplay from "@/components/product-count-display/product-count-display";
import ProductListDisplay from "@/components/product-list-display/product-list-display";
import ProductCount, { ProductCountSkeleton } from "@/features/product/product-count";
import productService from "@/services/product.service";
import { Suspense } from "react";

export default async function HomePage() {

  // const productsMostInStock = await productService.getMostInStock();
  // const productsOutOfStock = await productService.getOutOfStock();

  return (
    <>
      <h1 className="text-4xl">Demo Next.js</h1>

      <Suspense fallback={<ProductCountSkeleton />}>
        <ProductCount />
      </Suspense>
{/* 
      <h2 className="text-2xl mt-3">Liste des produits avec le stock le plus haut</h2>
      <ProductListDisplay products={productsMostInStock} />

      <h2 className="text-2xl mt-3">Liste des produits avec hors stock</h2>
      <ProductListDisplay products={productsOutOfStock} /> */}

    </>
  );
}

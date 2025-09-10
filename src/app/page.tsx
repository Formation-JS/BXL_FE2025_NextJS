import ProductCountDisplay from "@/components/product-count-display/product-count-display";
import ProductListDisplay from "@/components/product-list-display/product-list-display";
import productService from "@/services/product.service";

export default async function HomePage() {

  const foodCount = await productService.getCountProduct(true);
  const nonfoodCount = await productService.getCountProduct(false);
  const productsMostInStock = await productService.getMostInStock();
  const productsOutOfStock = await productService.getOutOfStock();

  return (
    <>
      <h1 className="text-4xl">Demo Next.js</h1>

      <h2 className="text-2xl mt-3">Nombre de produit</h2>
      <ProductCountDisplay foodCount={foodCount} nonFoodCount={nonfoodCount} />

      <h2 className="text-2xl mt-3">Liste des produits avec le stock le plus haut</h2>
      <ProductListDisplay products={productsMostInStock} />

      <h2 className="text-2xl mt-3">Liste des produits avec hors stock</h2>
      <ProductListDisplay products={productsOutOfStock} />

    </>
  );
}

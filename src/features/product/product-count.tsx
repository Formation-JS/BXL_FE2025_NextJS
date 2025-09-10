import ProductCountDisplay from "@/components/product-count-display/product-count-display";
import productService from "@/services/product.service";

export function ProductCountSkeleton() {
    return (
        <>
            <h2 className="mt-3 w-48 h-4 bg-gray-200 "></h2>
            <p className="w-24 h-4 bg-gray-200"></p>
            <p className="w-28 h-4 bg-gray-200"></p>
        </>
    )
}

export default async function ProductCount() {

    const foodCount = await productService.getCountProduct(true);
    const nonfoodCount = await productService.getCountProduct(false);

    return (
        <>
            <h2 className="text-2xl mt-3">Nombre de produit</h2>
            <ProductCountDisplay foodCount={foodCount} nonFoodCount={nonfoodCount} />
        </>
    );
}
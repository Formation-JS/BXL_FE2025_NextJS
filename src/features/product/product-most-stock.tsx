import ProductListDisplay from "@/components/product-list-display/product-list-display";
import productService from "@/services/product.service";


export function ProductMostInStockSkeleton() {
    return (
        <>
            <h2 className="text-2xl mt-3 w-52 h-6 mb-1 bg-gray-200"></h2>
            <div className="w-32 h-20 bg-gray-200"></div>
        </>
    );
}

export default async function ProductMostInStock() {

    const productsMostInStock = await productService.getMostInStock();

    return (
        <>
            <h2 className="text-2xl mt-3">Liste des produits avec le stock le plus haut</h2>
            <ProductListDisplay products={productsMostInStock} />
        </>
    );
}
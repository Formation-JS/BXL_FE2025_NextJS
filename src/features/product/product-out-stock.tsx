import ProductListDisplay from "@/components/product-list-display/product-list-display";
import productService from "@/services/product.service";

export function ProductOutOfStockSkeleton() {
    return (
        <>
        
            <h2 className="text-2xl mt-3 w-48 h-6 mb-1 bg-gray-200"></h2>
            <div className="w-36 h-18 bg-gray-200"></div>
        </>
    );
}

export default async function ProductOutOfStock() {

    const productsOutOfStock = await productService.getOutOfStock();

    return (
        <>
            <h2 className="text-2xl mt-3">Liste des produits avec hors stock</h2>
            <ProductListDisplay products={productsOutOfStock} />
        </>
    );
}
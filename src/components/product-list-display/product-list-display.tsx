import { ProductList } from "@/@types/product";

type ProductListDisplayProps = {
    products: ProductList;
};

export default function ProductListDisplay({ products }: ProductListDisplayProps) {

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    );
}
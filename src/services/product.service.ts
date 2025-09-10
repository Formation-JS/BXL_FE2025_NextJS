import { Product, ProductList, ProductListItem } from "@/@types/product";

const productService = {

    getAll: async (): Promise<ProductList> => {

        const products: Product[] = await fetch('http://localhost:4224/products')
            .then(res => res.json());

        return products;
    },

    getById: async (id: number): Promise<Product | null> => {

        const response = await fetch(`http://localhost:4224/products/${id}`);

        if(!response.ok) {
            return null;
        }

        const product : Product = await response.json();

        return product;
    }

};

export default productService;
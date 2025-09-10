export type ProductVat = 6 | 12 | 21;

export type Product = {
    id: number;
    name: string;
    description: string | null;
    price: number;
    isFood: boolean;
    vat: ProductVat,
    stock: number;
};

export type ProductListItem = Omit<Product, 'description' | 'stock'>;

export type ProductList = ProductListItem[];
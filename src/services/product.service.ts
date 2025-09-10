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
    },

    getMostInStock : async() : Promise<ProductList> => {

        // Simulation de perte de temps (Ne pas faire ça en prod !!!)
        await new Promise((resolve) => setTimeout(resolve, 3_000));

        const response : Response =await fetch('http://localhost:4224/products?_sort=stock&_order=desc') ;

        const data : Product[] = await response.json();

        const maxStock = data[0].stock;
        const datas = data.filter(e => e.stock === maxStock);

        return datas;
    },

    getCountProduct : async (isFood: boolean) : Promise<number> => {

        const response : Response =await fetch(`http://localhost:4224/products?isFood=${isFood}`);
        const data : Product[] = await response.json();

        return data.length;
    },

    getOutOfStock: async () : Promise<ProductList> => {
        
        // Simulation de perte de temps (Ne pas faire ça en prod !!!)
        await new Promise((resolve) => setTimeout(resolve, 1_000));

        const response : Response =await fetch('http://localhost:4224/products?stock=0');
        const data : Product[] = await response.json();

        return data;
    },

    add: async (product: Product) : Promise<number> => {
       
        const response : Response  = await fetch('http://localhost:4224/products',{
            method : 'POST',
            body : JSON.stringify(product),
            headers :{
                'Content-Type':'application/json'
            }
        });
        if(!response.ok){
            throw new Error('Not created mohamed')
        }

        const createdProduct : Product = await response.json();

        return createdProduct.id;
    }

};

export default productService;
import { notFound } from "next/navigation.js";
import PriceStyle from '@/components/price-style/price-style';
import productData from '@/data/product-data.json';

type ProductDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {

    const id = parseInt((await params).id);
    const product = productData.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <>
            <h2 className="text-2xl">Détail d'un produit</h2>
            <p>{product.name}</p>
            <p>{product.description ?? 'Aucun description'}</p>
            <p>{product.isFood ? 'Food' : 'Non food'}</p>
            <p>Prix TTC: <PriceStyle value={product.price} vat={product.vat} /></p>
            <p>Prix HTVA : <PriceStyle value={product.price} /></p>
        </>
    );
}
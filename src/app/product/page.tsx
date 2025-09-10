import PriceStyle from '@/components/price-style/price-style';
import productService from '@/services/product.service';
import Link from 'next/link';

export default async function ProductPage() {

    const products = await productService.getAll();

    return (
        <>
            <h2 className="text-2xl">Liste des produits</h2>
            {products.map(product => (
                <Link key={product.id} href={`/product/detail/${product.id}`}>
                    <article className='flex flex-col not-last:mb-3'>
                        <span>
                            {product.name}
                            {' '}
                            {product.isFood ? '🍎' : '⚽'}
                        </span>
                        <PriceStyle value={product.price} vat={product.vat} />
                    </article>
                </Link>
            ))}
        </>
    );
}
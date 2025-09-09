import PriceStyle from '@/components/price-style/price-style';
import productData from '@/data/product-data.json';
import Link from 'next/link';

export default function ProductPage() {

    return (
        <>
            <h2 className="text-2xl">Liste des produits</h2>
            {productData.map(product => (
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
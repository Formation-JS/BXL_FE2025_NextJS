import { notFound } from "next/navigation.js";

type ProductDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {

    const id = parseInt((await params).id);

    if (isNaN(id)) {
        notFound();
    }

    return (
        <>
            <h2 className="text-2xl">Détail d'un produit</h2>
        </>
    );
}
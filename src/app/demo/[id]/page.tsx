import { notFound } from "next/navigation.js";

type DemoDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function DemoDetailPage({ params } : DemoDetailPageProps) {

    const demoId = parseInt((await params).id);

    if(isNaN(demoId) || demoId < 0 || demoId > 100) {
        // Si id est invalide, page d'erreur 404
        notFound();
    }

    return (
        <>
            <h1 className="text-4xl">Page détail !</h1>
            <h2 className="text-2xl">L'id est : {demoId}</h2>
        </>
    );
}
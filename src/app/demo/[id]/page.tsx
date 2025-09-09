import bookService from "@/services/book.service";
import { notFound } from "next/navigation.js";

type DemoDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function DemoDetailPage({ params }: DemoDetailPageProps) {

    const demoId = parseInt((await params).id);

    // Code asynchrone
    //? -> Cela Provoque l'utilisation du composant "loading" (si présent)
    const book = await bookService.getById(demoId).catch(() => notFound())

    return (
        <>
            <h1 className="text-4xl">Page détail !</h1>
            <h2 className="text-2xl">L'id est : {demoId}</h2>

            <p>{book.name}</p>
            <p>{book.description}</p>
            <p>{book.releaseYear}</p>
        </>
    );
}
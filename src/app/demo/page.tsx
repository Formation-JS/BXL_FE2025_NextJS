import Link from "next/link";

export default function DemoPage() {

    return (
        <>
            <h1 className="text-4xl">Page démo !</h1>

            <h2 className="text-2xl mt-2" >Exemple des pages avec params</h2>
            <div className="flex flex-col">
                <Link href={'/demo/1'}>Livre 1</Link>
                <Link href={'/demo/2'}>Livre 2</Link>
                <Link href={'/demo/42'}>Livre error (Not found)</Link>
            </div>

            <h2 className="text-2xl mt-2" >Ajouter un livre</h2>
            <Link href={'/demo/add'}>Page du formulaire</Link>

        </>
    );
}
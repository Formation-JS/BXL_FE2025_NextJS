'use client';

import { addBookAction, BookFormState } from "@/actions/book.action";
import { useActionState } from "react";

export default function BookAddForm() {

    const handleTitleClick = () => {
        console.log('L\'utilisateur a cliqué sur le titre...');
    };

    const initialState: BookFormState = { message: '', data: null };
    const [state, handleAdd, pending] = useActionState(addBookAction, initialState);

    return (
        <>
            <h2 className="text-2xl" onClick={handleTitleClick}>Formulaire d'ajout d'un livre</h2>
            <form action={handleAdd} className="flex flex-col gap-1.5">
                <div className="flex flex-row gap-1">
                    <label htmlFor='book-name'>Nom du livre</label>
                    <input className="border-2" id='book-name' type="text"
                        name="name" defaultValue={state.data?.name} />
                </div>
                <div className="flex flex-row gap-1">
                    <label htmlFor='book-nb-page'>Nombre de page</label>
                    <input className="border-2" id='book-nb-page' type="number"
                        name="nbPage" defaultValue={state.data?.nbPage} />
                </div>
                <div className="flex flex-row gap-1">
                    <label htmlFor='book-author'>Auteur</label>
                    <input className="border-2" id='book-author' type="text"
                        name="author" defaultValue={state.data?.author} />
                </div>
                <div className="flex flex-row gap-1">
                    <label htmlFor='book-release-year'>L'année de sortie</label>
                    <input className="border-2" id='book-release-year' type="number"
                        name="releaseYear" defaultValue={state.data?.releaseYear} />
                </div>
                <div className="flex flex-row gap-1">
                    <button className="bg-green-600 px-4 py-2 rounded-4xl" type="submit">
                        Envoyer
                    </button>
                    {state.message && (
                        <span className="text-red-600 ml-">{state.message}</span>
                    )}
                </div>
            </form>
        </>
    );
}

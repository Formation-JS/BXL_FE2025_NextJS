'use server';

import { BookData } from "@/@types/book";
import bookService from "@/services/book.service";
import { redirect } from "next/navigation";

export type BookFormState = {
    data: BookData | null;
    message: string;
};

export const addBookAction = async (state: BookFormState, data: FormData) => {
    // Confirmation que le donnée son recu (log dans la console "server")
    console.log('Formulaire reçu', Object.fromEntries(data.entries()));

    // Validation (Méthode basique sur le FormData)
    //? Extraction des données
    const bookData: BookData = {
        name: data.get('name')?.toString()!,
        author: data.get('author')?.toString()!,
        releaseYear: parseInt(data.get('releaseYear')?.toString()!),
        nbPage: parseInt(data.get('nbPage')?.toString()!),
    };

    //? Tester si les données sont valide
    if (bookData.name === '') {
        return {
            data: bookData,
            message: 'Données incorrect !'
        };
    }

    // Utilisation du service pour intéragir avec le back-end
    await bookService.add(bookData);

    // Navigation vers la page "/demo"
    redirect('/demo');
};
import { Book } from "@/@types/book";

const bookService = {

    // Méthode du service pour acceder à la Web API
    getById: async (id: number): Promise<Book> => {

        // Envoi de la requete
        const response = await fetch(`http://localhost:4224/books/${id}`);

        // Erreur si la resource n'est pas trouvé
        if (!response.ok) {
            throw new Error('Book not found !');
        }

        // Traitement des données
        const data = await response.json();

        // Mapping (Format d'objet de l'api vers l'app Next.js)
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            author: data.author,
            nbPage: data.nbPage,
            releaseYear: data['année_de_sortie']
        };
    }

};
export default bookService;
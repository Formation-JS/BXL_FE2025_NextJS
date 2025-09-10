
export type Book = {
  id: number;
  name: string;
  description?: string; 
  nbPage: number;
  author: string;
  releaseYear: number;
};

export type BookData = Omit<Book, 'id'>;
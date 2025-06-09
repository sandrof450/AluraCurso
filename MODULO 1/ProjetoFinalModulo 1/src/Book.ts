import { BookCategory } from './enumBookCategory'

type Book = {
  title: string;
  summary: string;
  year: number;
  pages: number;
  isbn?: string;
  category: BookCategory;
}

export{Book}

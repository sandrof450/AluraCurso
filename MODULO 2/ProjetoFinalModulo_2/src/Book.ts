import { BookCategory } from './enumBookCategory'

type Book = {
  title: string;
  summary: string;
  year: number;
  pages: number;
  isbn?: string;
  category: number;
  editora: number;
  autor: number;
}

export{Book}

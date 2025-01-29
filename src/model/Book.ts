import { Categorie } from "./Categorie";

export class Book {
  constructor(
    public title: string,
    public author: string,
    public coverUrl: string,
    public status: 'Checked Out' | 'Preview Only' | 'Join Waitlist' | 'Borrow' | 'Read'
  ) {}
}

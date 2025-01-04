import { Categorie } from "./Categorie";

export interface Book{
    title: string;
    author:string;
    cover_image: string;
    nbrExemplaireAvai: number;
    categorie:Categorie;
    isbn: string;
}
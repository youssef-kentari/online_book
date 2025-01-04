import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';
import { Book } from '../../model/Book';
import { BookComponent } from "../book/book.component";
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../services/navbar.service';
import { CategoriesComponent } from "../categories/categories.component";
import { CategoriesService } from '../../services/categories.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [BookComponent, CommonModule, CategoriesComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {
  books!: Book[];

  constructor(
    private categorieService: CategoriesService,
    private bookService: BookService,
    private catalogueService: CatalogueService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.getCatalogue();
  }

  getAllBooks() {
    this.catalogueService.getAllBooks().subscribe(
      (res: any) => {
        this.books = res;
      }

    )
  }

  getBooksByCategorie(categorie: string){
    this.bookService.getBooksByCategorie(categorie).subscribe(
      (res:any) => {
        this.books = res
      }
    )
  }

  getCatalogue() {
    this.navbarService.searchedItem.asObservable().subscribe(
      res => {
        if (res === '') {
          
          this.categorieService.categorieSelected.asObservable().subscribe(
            categorie => {

              if (categorie ==='all') {
                this.getAllBooks()
              }else{
                this.getBooksByCategorie(categorie)
              }

            }
          )
          console.log(this.books)
        } else {
          this.books = this.books.filter(book =>
            book.title.toLowerCase().includes(res.toLowerCase()) ||
            book.author.toLowerCase().includes(res.toLowerCase())
          );
        }
      }
    )

  }
}

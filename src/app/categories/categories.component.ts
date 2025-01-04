import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { Categorie } from '../../model/Categorie';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{

  categorie!: string
  categories : Categorie[] = []

  constructor (
    private categorieService : CategoriesService
  ){}

  ngOnInit(): void {
      this.getAllCategories()
      this.categorieService.categorieSelected.asObservable().subscribe(
        res => this.categorie = res
      )
  }

  setCategorie(categorie:string){
    this.categorieService.setCategorie(categorie)
  }

  getAllCategories(){
    this.categorieService.getAllCategories().subscribe(
      (response:any)=>{
        this.categories = response
      }
    )
  }
}

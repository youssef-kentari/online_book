import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

menu=[
  {
    number:1,
    icon:'fa-solid fa-house',
    label:'Home',
    router:''
  },
  {
    number:2,
    icon:'fa-solid fa-box',
    label:'Products',
    router:'/catalogue'
  },
  {
    number:3,
    icon:'fa-solid fa-user',
    label:'Adherents',
    router:'addAdherent'
  },
  {
    number:4,
    icon:'fa-solid fa-book',
    label:'Livres',
    router:'addBook'
  },
  {
    number:5,
    icon:'fa-solid fa-gear',
    label:'Settings',
    router:''
  },

]
}

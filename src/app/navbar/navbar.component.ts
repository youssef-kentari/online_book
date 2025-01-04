import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchedText! :string

  constructor(private navbarService: NavbarService){}
  
  searchingBook(searchedText: string){
    this.navbarService.searchingBook(searchedText)
  }

}

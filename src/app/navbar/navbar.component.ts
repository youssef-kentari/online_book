import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NavbarService } from '../../services/navbar.service';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchedText! :string
  isSidebarOpen = false;
  constructor(private navbarService: NavbarService){}

  searchingBook(searchedText: string){
    this.navbarService.searchingBook(searchedText)
  }


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

}

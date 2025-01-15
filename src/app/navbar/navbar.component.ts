import {Component, input, output} from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NavbarService } from '../../services/navbar.service';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchedText! :string
  isSidebarOpen = false;
  constructor(private navbarService: NavbarService,private router: Router){}

  searchingBook(searchedText: string){
    this.navbarService.searchingBook(searchedText)
  }


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  isLeftSidebarCollapsed = true;
  items = [
    {
      routeLink: '/',
      icon: 'fas fa-home',
      label: 'Dashboard',
    },
    {
      routeLink: '/signIn',
      icon: 'fas fa-box-open',
      label: 'Products',
    },
    {
      routeLink: 'pages',
      icon: 'fas fa-file',
      label: 'Pages',
    },
    {
      routeLink: 'addAdherent',
      icon: 'fas fa-file',
      label: 'Ajouter Adherent',
    },
    {
      routeLink: 'addLivre',
      icon: 'fas fa-file',
      label: 'Ajouter Livre',
    },
    {
      routeLink: 'settings',
      icon: 'fas fa-cog',
      label: 'Settings',
    },
  ];

  toggleCollapse(): void {
   this.isLeftSidebarCollapsed=!this.isLeftSidebarCollapsed;
  }

  closeSidenav(): void {
    this.isLeftSidebarCollapsed=true;
  }

}

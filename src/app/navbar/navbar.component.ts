import {Component, EventEmitter, input, Output, output} from '@angular/core';
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
@Output() SideNavToggled=new EventEmitter<boolean>;
SideNavStatus=false;

  SideNavToggle(){
this.SideNavStatus=!this.SideNavStatus;
this.SideNavToggled.emit(this.SideNavStatus);
  }
}

import { Routes } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { DetailsBookComponent } from './details-book/details-book.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AddbookComponent} from './addbook/addbook.component';

export const routes: Routes = [
    {path: '', component: CatalogueComponent},
    {path: 'details/:isbn', component: DetailsBookComponent},
  {path:'signIn',component : SignInComponent},
  {path:'signUp',component: SignUpComponent},
  {path:'addBook',component: AddbookComponent},
    {path: '**', redirectTo: '/'}
];

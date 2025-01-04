import { Routes } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { DetailsBookComponent } from './details-book/details-book.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

export const routes: Routes = [
    {path: '', component: CatalogueComponent},
    {path: 'details/:isbn', component: DetailsBookComponent},
    {path: '**', redirectTo: '/'}
];

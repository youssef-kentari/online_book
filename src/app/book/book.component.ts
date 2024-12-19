import { Component, Input, input } from '@angular/core';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() bookItem! : Book;
}

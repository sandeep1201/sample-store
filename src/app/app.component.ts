import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as bookActions from './store/getBooks/getBooks.actions'
import { Book } from './store/getBooks/getBooks.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<any>) {
    this.store.dispatch(new bookActions.AddBookAction({
      title: 'Lincpin',
      author: 'Steve',
      description: 'About how to be your own boss',
      loading: false
    }))
  }
  getBooks: Observable<Book>;
  ngOnInit () {
    this.getBooks = this.store.select('books')
    console.log(this.getBooks);
  }
}

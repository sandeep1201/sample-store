import { Book } from './getBooks.model';
import { Action } from '@ngrx/store';

export const ADD_BOOK = '[Book] Add Book';





export class AddBookAction implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: Book) { }
}

export type BookActions
  = AddBookAction

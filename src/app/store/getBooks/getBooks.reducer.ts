import { Action } from '@ngrx/store';
import * as bookActions from './getBooks.actions';
import { Book, initialBook } from './getBooks.model';

export function bookReducer (state = initialBook, action: bookActions.BookActions) {

  switch (action.type) {
    case bookActions.ADD_BOOK:
    return Object.assign({loading: false}, state, action.payload);

    default:
      return state;
  }
}

export const status = (state: Book) => state;

export const createMemberError = (state: Book) => state;

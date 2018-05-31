import { Action } from '@ngrx/store';
import * as bookActions from './getBooks.actions';
import { Book, initialBook } from './getBooks.model';

export function bookReducer (state = initialBook, action: bookActions.BookActions) {

  switch (action.type) {
    case bookActions.LOAD_BOOK:
    return Object.assign({}, state, {
        loading: true
      });
    case bookActions.LOAD_FAIL:
    return Object.assign({}, state, {
      loading: false
    });
    case bookActions.ADD_BOOK:
    return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

export const status = (state: Book) => state;

export const createMemberError = (state: Book) => state;

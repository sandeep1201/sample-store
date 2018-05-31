import { Book } from './getBooks.model';
import { Action } from '@ngrx/store';

export const LOAD =         '[Book] Load';
export const LOAD_BOOK = '[Book] Load Success';
export const ADD_BOOK = '[Book] Add Book';
export const LOAD_FAIL =    '[Book] Load Fail';

export class LoadAction implements Action {
  readonly type = LOAD;
  constructor(public payload: Book) { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_BOOK;
  constructor(public payload: Book) { }
}

export class AddBookAction implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: Book) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;
  constructor(public payload: Book) { }
}

export type BookActions
  = LoadAction
  | LoadSuccessAction
  | AddBookAction
  | LoadFailAction;

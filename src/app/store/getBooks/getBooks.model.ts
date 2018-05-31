  export class Book {
    constructor(
      public title: string, 
      public author: string,
      public description: string,
      public loading: boolean,
    ) {}
  }

  export const initialBook: Book = {
    title: 'string',
    author: 'string',
    description: 'string',
    loading: true
  };
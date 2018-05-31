import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { bookReducer  } from './store/getBooks/getBooks.reducer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({books: bookReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksManagmentComponent } from './books-managment/books-managment.component';
import { BookCreateComponent } from './book-create/book-create.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'books/manage', component: BooksManagmentComponent},
  {path: 'books/create', component: BookCreateComponent},
  { path: 'books/:bookId', component: BookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

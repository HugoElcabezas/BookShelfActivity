import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-managment',
  templateUrl: './books-managment.component.html',
  styleUrls: ['./books-managment.component.sass']
})
export class BooksManagmentComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().then((books) => {
      this.books = books;
    });
  }

  deleteBook(boookId: string) {
    this.bookService.deletebook(boookId).then((result) => {
      this.getBooks();
    }).catch((error) => {
      console.log(error);
    });
  }

}

import { Injectable } from '@angular/core';
import { Book } from 'src/models/book.model';
import { resolve } from 'url';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BookService {

  books: Book[] = [
    {
      id: '123',
      description: 'Esta es una descripción vacía que se debe de rellenar',
      title: 'Romeo y Julieta',
      author: 'Joe Smith',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/81sedn5BKPL.jpg'
    },
    {
      id: '456',
      title: 'Amor de su vida',
      description: 'Esta es una descripción vacía que se debe de rellenar',
      author: 'Hugo Sevilla',
      coverUrl: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t1.0-9/s960x960/80578801_2767445213318430_7733709174797762560_o.jpg?_nc_cat=105&_nc_ohc=F11-8y2DAJUAX_b8X45&_nc_ht=scontent.ftij2-1.fna&_nc_tp=7&oh=7ee19df47f09dc173dc10f48860deac6&oe=5EFA47EB'
    },
    {
      id: '789',
      description: 'Esta es una descripción vacía que se debe de rellenar',
      title: 'Final Feliz',
      author: 'Itzel Diaz',
      coverUrl: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t1.0-9/p720x720/73528694_2391973704246283_5113155164273901568_o.jpg?_nc_cat=111&_nc_ohc=54aXCHswLcQAX_twWk2&_nc_ht=scontent.ftij2-1.fna&_nc_tp=6&oh=9c725d3c0745550695303e4dada931e2&oe=5F007312'
      }  ];

    constructor() {


    }

    getBooks(): Promise<Book[]> {
      return new Promise((resolve, reject) => {
        resolve(this.books);
      });
    }

    getBook(bookId: string): Promise <Book> {

      // Abajo se puede apreciar una función LAMBDA

      return new Promise((resolve, reject) => {
        const foundBook = this.books.find((book) => {
          return book.id === bookId;
        });
        if (foundBook) {
          resolve(foundBook);
        } else {
          reject(null);
        }
      });
    }

    deletebook(bookId: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        const remainingBooks = this.books.filter((book) => {
          return book.id !== bookId;
        });

        if (JSON.stringify(remainingBooks) !== JSON.stringify(this.books)) {
          this.books = remainingBooks;
          resolve(true);
        } else {
          reject(false);
        }

      });
    }

    updateBook(bookId: string, updateBook: Book): Promise<boolean> {
      return new Promise ((resolve, reject) => {
        const updatedBooks = this.books.map((book) => {
          if (book.id === bookId) {
            const newBook = {
              ...book,
              ...updateBook
            };

            return newBook;
          }
          return book;
        });
        if (JSON.stringify(updatedBooks) !== JSON.stringify(this.books)) {
          this.books = updatedBooks;
          resolve(true);
        } else {
          reject(false);
        }
      });
    }

    addBook(book: Book): Promise<boolean> {
      return new Promise((resolve, reject) => {
        this.books.push(book);

        resolve(true);
      });
    }

}

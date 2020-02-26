import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
    //this.getBook();
    //this.updateBook();
    //this.deleteBook();
    //this. addBook();
  }

  getBooks() {
    this.bookService.getBooks().then((books) => {
      this.books = books;
    });
  }

  getBook() {
    //const foundBook = this.bookService.getBook('18323');
    //console.log(foundBook);

    // Ahora mandamos a llamar la función
    this.bookService.getBook('123').then((book) => {
      console.log(book);
    }).catch((error) => {
      console.log(error);
    });
  }

  deleteBook() {
    this.bookService.deletebook('123').then((res) => {
      console.log(res);
      this.getBooks();
    }).catch((error) => {
      console.log(error);
    });
  }
}
/*
  updateBook() {
    const newBook = {
      id: '666',
      title: 'Por Siempre Juntos Hasta el Final',
      author: 'Joe Smith',
      coverUrl: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t1.15752-9/87160789_527789494533443_3821263017778085888_n.jpg?_nc_cat=105&_nc_ohc=XWmxREVvSM0AX_iGscW&_nc_ht=scontent.ftij2-1.fna&oh=bd58541e4459fbf31d00ecf9a2b1fa84&oe=5EF3F614'
    };
    this.bookService.updateBook('123', newBook).then((res) => {
      console.log(res);
      this.getBooks();
    }).catch((error) => {
      console.log(error);
    });
  }

  addBook() {
    const newBook: Book = {
      id: '10323',
      title: 'New',
      author: 'Dios',
      coverUrl: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t1.0-9/81812592_2806789342717350_2076414222857666560_n.jpg?_nc_cat=111&_nc_ohc=1319dt4SrJIAX_HUQAp&_nc_ht=scontent.ftij2-1.fna&oh=e068fdae60f9b8575bb4507b096b0233&oe=5EC05BF1'
    };


    this.bookService.addBook(newBook).then((res) => {
      console.log(res);
      this.getBooks();
    });

  }

}
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.sass']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = new FormGroup( {
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
      coverUrl: new FormControl()
    });
  }

  onSubmit() {
    console.log('hola');
  }

}

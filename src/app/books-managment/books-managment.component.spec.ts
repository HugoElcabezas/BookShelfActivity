import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksManagmentComponent } from './books-managment.component';

describe('BooksManagmentComponent', () => {
  let component: BooksManagmentComponent;
  let fixture: ComponentFixture<BooksManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

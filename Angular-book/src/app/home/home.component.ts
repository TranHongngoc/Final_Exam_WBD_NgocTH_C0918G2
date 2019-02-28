import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IBook} from "../book";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService, fb: FormBuilder) { }

  books: IBook[] = [];
  postForm: FormGroup;

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => (this.books = next), error => (this.books= []))
  }
}

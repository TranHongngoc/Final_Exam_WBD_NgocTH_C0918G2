import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IBook} from "../book";

@Component({
  selector: 'app-readed',
  templateUrl: './readed.component.html',
  styleUrls: ['./readed.component.scss']
})
export class ReadedComponent implements OnInit {

  constructor(private bookService: BookService,private fb: FormBuilder) { }

  books: IBook[] = [];
  postForm: FormGroup;


  ngOnInit() {
    this.bookService.getBooks().subscribe(next => (this.books = next), error => (this.books = []));
  }

}

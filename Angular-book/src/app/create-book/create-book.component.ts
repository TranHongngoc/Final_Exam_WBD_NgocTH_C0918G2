import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IBook} from "../book";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  constructor(private bookService: BookService,private fb: FormBuilder,
  private router: Router,
  private route: ActivatedRoute) { }

  books: IBook[] = [];
  book: IBook;
  postForm: FormGroup;

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      read: [true]
    });
    this.bookService.getBooks().subscribe(next => (this.books = next), error => (this.books = []));
  }

  addNewBook() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      this.bookService.createBook(value)
        .subscribe(next => {
            this.books.unshift(next);
            this.postForm.reset({
                name: '',
                read: true
              }
            );
          },
          error => console.log(error));
    }
  }

  readBook() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      const data = {
        ...this.book,
        ...value
      };
      this.bookService.readBook(data).subscribe(
        next => {
          this.router.navigate(['']);
        },
        error => console.log(error)
      );
    }
  }
}

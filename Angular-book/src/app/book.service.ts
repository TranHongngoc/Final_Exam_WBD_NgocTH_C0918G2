import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBook} from "./book";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly URL = 'http://localhost:8081/books';

  constructor(private http: HttpClient) { }

  getBooks(count = 20): Observable<IBook[]> {
  return this.http.get<IBook[]>(this.URL).pipe(
    map(response => response.filter((post,i) => i < count))
  );
  }

  getBookById(id: number): Observable<IBook>{
    return this.http.get<IBook>(`${this.URL}/${id}`);
  }
  createBook(book: Partial<IBook>): Observable<IBook>{
  return this.http.post<IBook>(this.URL,book);
  }


  readBook(book: IBook): Observable<IBook>{
    book.read = false;
    return this.http.patch<IBook>(`${this.URL}/${book.id}`,book);
  }

  readedBook(book: IBook): Observable<IBook>{
    book.read = true;
    return this.http.patch<IBook>(`${this.URL}/${book.id}`,book);
  }


}

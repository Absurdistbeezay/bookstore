import { Injectable } from "@angular/core";
import { Book } from "./models/book";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BookService {
  constructor(private http: HttpClient) {}

  private url: string = "http://localhost:8080/BookService/jaxrs/books";
  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }
  addBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders({
      "Content-type": "application/json"
    });
    return this.http.post<Book>(this.url, book, {
      headers: headers
    });
  }
}

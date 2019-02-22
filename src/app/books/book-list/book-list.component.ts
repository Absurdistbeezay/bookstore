import { Component, OnInit } from "@angular/core";
import { Book } from "../../models/book";
import { BookService } from "src/app/book.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }
  addBook(book: Book) {
    if ((book.title || book.author) !== "") {
      this.bookService.addBook(book).subscribe(data => this.books.push(data));
    }
  }
  ngOnInit() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
    // console.log(this.books);
  }
}

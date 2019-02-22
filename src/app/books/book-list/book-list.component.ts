import { Component, OnInit } from "@angular/core";
import { Book } from "../../models/book";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    {
      title: "The Lord of the Rings",
      author: "J R R Tolkien",
      cover: "",
      bookId: 1
    },
    {
      title: "The Left hand of Darkness",
      author: "Ursula K Le Guin",
      cover: "",
      bookId: 2
    }
  ];

  constructor() {}

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }
  addBook(book: Book) {
    this.books.push(book);
  }
  ngOnInit() {
    // console.log(this.books);
  }
}

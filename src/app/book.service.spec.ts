import { TestBed, tick, fakeAsync, inject } from "@angular/core/testing";

import { BookService } from "./book.service";
import { Book } from "./models/book";
import { HttpClient, HttpHeaders } from "@angular/common/http";

describe("BookService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [HttpClient]
    })
  );

  // it("should be created", () => {
  //   const service: BookService = TestBed.get(BookService);
  //   expect(service).toBeTruthy();
  // });

  // it("should return books", inject(
  //   [BookService],
  //   fakeAsync((service: BookService) => {
  //     let books: Book[];
  //     service.getBooks().subscribe(data => (books = data));
  //     tick();
  //     expect(books).toBeTruthy();
  //     expect(books[0].title).toBe("The Lord of the Rings");
  //   })
  // ));

  // it("should add a book", inject(
  //   [BookService],
  //   fakeAsync((service: BookService) => {
  //     let books: Book[];
  //     const expected = new Book(
  //       "A Wizard of EarthSea",
  //       "Ursula K Le Guin",
  //       "",
  //       3
  //     );
  //     service.getBooks().subscribe(data => (books = data));
  //     tick();
  //     const expectedLength = books.length + 1;
  //     service.getBooks().subscribe(data => (books = data));
  //     tick();
  //     expect(books.length).toBe(expectedLength);
  //     expect(books[books.length - 1]).toBe(expected);
  //   })
  // ));
});
